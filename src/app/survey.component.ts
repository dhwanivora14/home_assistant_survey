import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';
import * as widgets from 'surveyjs-widgets';

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
  automationYaml = {};

  click(result) {
    console.log(result);

  }

  ngOnInit() {
    this.surveyModel = new Survey.Model(this.json);
    this.surveyModel.onAfterRenderQuestion.add((survey, options) => {
      if (!options.question.popupdescription) { return; }

      // Add a button;
      const btn = document.createElement('button');
      btn.className = 'btn btn-info btn-xs';
      btn.innerHTML = 'More Info';
      const question = options.question;
      btn.onclick = function () {
        // showDescription(question);
        alert(options.question.popupdescription);
      };
      const header = options.htmlElement.querySelector('h5');
      const span = document.createElement('span');
      span.innerHTML = '  ';
      header.appendChild(span);
      header.appendChild(btn);
    });

    // this.surveyModel.onValueChanged.add((survey, options) => {
    //   console.log(options.name)
    // });

    this.surveyModel
    .onUploadFiles
    .add((survey, options) => {
        var formData = new FormData();
        let m = new Map<string, File>();
        options
            .files
            .forEach(function (file) {
                formData.append(file.name, file);
                m.set(file.name, file);
            });
        // var xhr = new XMLHttpRequest();
        // xhr.responseType = 'json';
        // xhr.open('POST', 'api/Survey/post');
        //  // https://surveyjs.io/api/MySurveys/uploadFiles
        // xhr.onload = function () {
        //     var data = xhr.response;
        //     options.callback('success', options.files.map(file => {
        //       const str = typeof file;
        //         return {
        //             file: file,
        //             content: data[file.name]
        //         };
        //     }));
        // };
        // xhr.send(formData);
        this.populateAutomationDropdown(m);
    });
    this.surveyModel.onComplete
      .add(result =>
        this.submitSurvey.emit(result.data)
      );
    Survey.SurveyNG.render('surveyElement', { model: this.surveyModel });
  }

  readFile(file): Promise<string | ArrayBuffer>{
    console.log("okay");
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

  initializeComponents(components) {
    this.surveyModel.getQuestionByName("automation_components_1").choices = components;
    this.surveyModel.getQuestionByName("automation_components_2").choices = components;
  }

  populateAutomationDropdown(files : Map<string, File>) {
    var automationchoices = [], fileArray = [];
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

              console.log(files);
              files.forEach((file) => {
                _this.readFile(file).then((fileContent) => {
                  _this.processAutomations(fileContent);
                });
              });
            });
          });
        }
        else {
          this.readFile(file).then((fileContent) => {
            this.processAutomations(fileContent);
          });
        }
      });

      // this.readMultipleFiles(fileArray).then((results) => {
      //   results.forEach((fileContent) => {
      //     console.log("here");
      //     const config = yaml.safeLoad(fileContent);
      //     const json = JSON.parse(JSON.stringify(config, null, 4));
      //     json.forEach((value) => {
      //       if(value.hasOwnProperty('alias')) {
      //         var choice = String(value.alias);
      //         automationchoices.push(choice);
      //       }
      //     });
      //   });
      //   const automations = this.surveyModel.getQuestionByName("automation_choices_1");
      //   automations.choices = automationchoices;
      //   this.surveyModel.getQuestionByName("automation_choices_2").choices = automationchoices;
      //   automations.visible = true;
      //   this.surveyModel.getQuestionByName("automations_uploaded").visible = true;
      //   this.surveyModel.getQuestionByName("automations_not_uploaded").visible = false;

      //   this.surveyModel.getQuestionByName("automation_title_1").visible = false;
      //   console.log(automations);
      // });
    } catch (e) {
        console.log(e);
    }
  }

  processYAMLContent(fileContent) {
    fileContent = fileContent.replace("(!\w+)", "");
    return fileContent;
  }
  processAutomations(fileContent) {
    var question = <Survey.QuestionPanelDynamicModel>this.surveyModel.getQuestionByName("automation_details");
    var element = <Survey.QuestionDropdown >question.templateElements[0];
    if(fileContent.includes("alias")) {
      console.log("Kuke Kuke Koyaliya");

      const config = yaml.safeLoad(this.processYAMLContent(fileContent));
      const jsonString = JSON.stringify(config, null, 4);
      const json = JSON.parse(jsonString);
      console.log(json);
      Object.keys(json).forEach((key) => {
        if(key === 'alias') {
          var choice = String(json[key]);
          this.automationchoices.push(choice);
          this.automationYaml[key] = jsonString;
        }
      });
      this.automationchoices.sort();
      element.choices = this.automationchoices;
    }
  }
}
