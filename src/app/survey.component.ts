import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';
import * as widgets from 'surveyjs-widgets';
import { QuestionFileModel } from "survey-angular";

import 'inputmask/dist/inputmask/phone-codes/phone.js';

widgets.icheck(Survey);
widgets.select2(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
widgets.prettycheckbox(Survey);

Survey.JsonObject.metaData.addProperty('questionbase', 'popupdescription:text');
Survey.JsonObject.metaData.addProperty('page', 'popupdescription:text');
import * as yaml from 'js-yaml';
import * as JSZip from 'jszip';
import { asElementData } from '@angular/core/src/view';




Survey.JsonObject.metaData.addProperty('questionbase', 'popupdescription:text');
Survey.JsonObject.metaData.addProperty('page', 'popupdescription:text');

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'survey',
  template: `<div class='survey-container contentcontainer codecontainer'><div id='surveyElement'></div></div>`
})
export class SurveyComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();
  surveyModel = null;
  @Input()
  json: object;

  automationchoices = [];
  automationYaml = new Map();

  click(result) {
    console.log(result);

  }

  ngOnInit() {
    this.surveyModel = new Survey.Model(this.json);
    var isUpdatingValues = false;
    var _this = this;
//     this.surveyModel.onValueChanged.add(function(survey, options){
//     if(isUpdatingValues) return;
//     if(options.name != "automation_details") return;
//     isUpdatingValues = true;
//     var automation_details = options.value;
//     if(automation_details && Array.isArray(automation_details)) {
//         let updated_choices = [];
//         console.log(automation_details);
//         for(var i = 0; i < automation_details.length; i++) {
//             console.log(automation_details[i]);
//             automation_details[i].automation_snippet.html = "<pre><code>" + _this.automationYaml.get(automation_details[i].automation_choices) + "</code></pre>";
//         }
//         survey.setValue("automation_details", automation_details);

//     }
//     isUpdatingValues = false;
// });

    this.surveyModel
    .onUploadFiles
    .add((survey, options) => {
        var formData = new FormData();
        let m = [];
        options
            .files
            .forEach(function (file) {
                formData.append(file.name, file);
                m.push(file);
            });
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'api/Survey/post');
         // https://surveyjs.io/api/MySurveys/uploadFiles
        xhr.onload = function () {
            var data = xhr.response;
            options.callback('success', options.files.map(file => {
              const str = typeof file;
                return {
                    file: file,
                    content: data[file.name]
                };
            }));
        };
        xhr.send(formData);
        this.populateAutomationDropdown(m);
    });

    this.surveyModel.onComplete
      .add(result =>
        this.submitSurvey.emit(result.data)
      );

    var _this = this;
    Survey.SurveyNG.render('surveyElement', { model: this.surveyModel , onServerValidateQuestions: this.surveyValidateQuestion});
  }

  surveyValidateQuestion(survey, options) {
    var yamlfiles = options.data["yamlfiles"];
    //If the question is empty then do nothing
    if (yamlfiles) {
      var yamlCount = GLOBALS.yamlCount;
      if(yamlCount < 1) {
        options.errors["yamlfiles"] = "Please upload yaml files only!";
      }
    }
    options.complete();
  }

  readFile(file): Promise<string | ArrayBuffer>{
    const fr = new FileReader();
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      fr.onerror = () => {
        fr.abort();
        reject(new DOMException("Problem parsing input file."));
      };

      fr.onloadend = () => {
        resolve(fr.result);
      };
      fr.readAsText(file);
    });
  }


  readMultipleFiles(files) {
    console.log(files);
      return Promise.all(files.map(this.readFile));
  }

  populateAutomationDropdown(files : Array<File>) {
    var zip = new JSZip();
    try {
      files.forEach((file) => {
        if(file.name.endsWith(".zip")) {
          zip.loadAsync(file).then((zipFile) => {
            var entries = Object.keys(zip.files).map(function (name) {
              return zip.files[name];
            });
            var listOfPromises = entries.map(function(entry) {
              return entry.async("blob").then(function (u8) {
                // we bind the two together to be able to match the name and the content in the last step
                return [entry.name, u8];
              });
            });
            var promiseOfList = Promise.all(listOfPromises);
            var _this = this;
            promiseOfList.then(function (list) {
              // here, list is a list of [name, content]
              // let's transform it into an object for easy access
              var result = list.reduce(function (accumulator, current) {
                var currentName = current[0];
                var currentValue = current[1];
                accumulator[currentName] = currentValue;
                return accumulator;
              }, {} /* initial value */);

              let files = [];
              files = Object.keys(result).filter((fileName) => {
                return fileName.endsWith(".yaml") || fileName.endsWith(".yml");
              }).map (key => {
                return result[key];
              });

              GLOBALS.yamlCount = GLOBALS.yamlCount + files.length;
              files.forEach((file) => {
                _this.readFile(file).then((fileContent) => {
                  _this.processAutomations(fileContent);
                });
              });
              return file;
            });
          });

        }
        else {
          this.readFile(file).then((fileContent) => {
            this.processAutomations(fileContent);
          });
        }
      });

    } catch (e) {
        console.log(e);
    }
  }

  processYAMLContent(fileContent) {
    fileContent = fileContent.replace(/!\w+/, "");
    return fileContent;
  }

  processAutomations(fileContent) {
    var question = <Survey.QuestionPanelDynamicModel>this.surveyModel.getQuestionByName("automation_details");
    var element = <Survey.QuestionDropdown >question.templateElements[0];
    if(fileContent.includes("alias")) {
      const config = yaml.safeLoad(this.processYAMLContent(fileContent));
      const jsonString = JSON.stringify(config, null, 4);
      const json = JSON.parse(jsonString);
      Object.keys(json).forEach((key) => {
        if(key === 'alias') {
          var choice = String(json[key]);
          this.automationchoices.push(choice);
          this.automationYaml.set(choice, jsonString);
        }
      });
      this.automationchoices.sort();
      element.choices = this.automationchoices;
    }
  }
}

export const GLOBALS = {
  yamlCount: 0,
};
