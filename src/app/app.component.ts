import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly components = ["Abode", "Alarmdecoder", "Alarm Control Panel : Abode", "Alarm Control Panel : Alarmdecoder", "Alarm Control Panel : Alarmdotcom", "Alarm Control Panel : Arlo", "Alarm Control Panel : Canary", "Alarm Control Panel : Concord232", "Alarm Control Panel : Egardia", "Alarm Control Panel : Envisalink", "Alarm Control Panel : Homematicip Cloud", "Alarm Control Panel : Ialarm", "Alarm Control Panel : Ifttt", "Alarm Control Panel : Manual", "Alarm Control Panel : Manual Mqtt", "Alarm Control Panel : Mqtt", "Alarm Control Panel : Nx584", "Alarm Control Panel : Satel Integra", "Alarm Control Panel : Simplisafe", "Alarm Control Panel : Spc", "Alarm Control Panel : Totalconnect", "Alarm Control Panel : Verisure", "Alarm Control Panel : Wink", "Alert", "Alexa : Const", "Alexa : Flash Briefings", "Alexa : Intent", "Alexa : Smart Home", "Amcrest", "Android Ip Webcam", "Apcupsd", "Api", "Apple Tv", "Arduino", "Arlo", "Asterisk Mbox", "August", "Automation : Event", "Automation : Homeassistant", "Automation : Litejet", "Automation : Mqtt", "Automation : Numeric State", "Automation : State", "Automation : Sun", "Automation : Template", "Automation : Time", "Automation : Zone", "Axis", "Bbb Gpio", "Binary Sensor : Abode", "Binary Sensor : Ads", "Binary Sensor : Alarmdecoder", "Binary Sensor : Android Ip Webcam", "Binary Sensor : Apcupsd", "Binary Sensor : Arest", "Binary Sensor : August", "Binary Sensor : Aurora", "Binary Sensor : Axis", "Binary Sensor : Bayesian", "Binary Sensor : Bbb Gpio", "Binary Sensor : Blink", "Binary Sensor : Bloomsky", "Binary Sensor : Bmw Connected Drive", "Binary Sensor : Command Line", "Binary Sensor : Concord232", "Binary Sensor : Deconz", "Binary Sensor : Digital Ocean", "Binary Sensor : Ecobee", "Binary Sensor : Egardia", "Binary Sensor : Eight Sleep", "Binary Sensor : Enocean", "Binary Sensor : Envisalink", "Binary Sensor : Ffmpeg Motion", "Binary Sensor : Ffmpeg Noise", "Binary Sensor : Flic", "Binary Sensor : Gc100", "Binary Sensor : Hikvision", "Binary Sensor : Hive", "Binary Sensor : Homematic", "Binary Sensor : Homematicip Cloud", "Binary Sensor : Hydrawise", "Binary Sensor : Ihc", "Binary Sensor : Insteon Plm", "Binary Sensor : Iss", "Binary Sensor : Isy994", "Binary Sensor : Knx", "Binary Sensor : Konnected", "Binary Sensor : Linode", "Binary Sensor : Maxcube", "Binary Sensor : Modbus", "Binary Sensor : Mqtt", "Binary Sensor : Mychevy", "Binary Sensor : Mysensors", "Binary Sensor : Mystrom", "Binary Sensor : Nest", "Binary Sensor : Netatmo", "Binary Sensor : Nx584", "Binary Sensor : Octoprint", "Binary Sensor : Openuv", "Binary Sensor : Pilight", "Binary Sensor : Ping", "Binary Sensor : Qwikswitch", "Binary Sensor : Rachio", "Binary Sensor : Raincloud", "Binary Sensor : Rainmachine", "Binary Sensor : Random", "Binary Sensor : Raspihats", "Binary Sensor : Rest", "Binary Sensor : Rfxtrx", "Binary Sensor : Ring", "Binary Sensor : Rpi Gpio", "Binary Sensor : Rpi Pfio", "Binary Sensor : Satel Integra", "Binary Sensor : Skybell", "Binary Sensor : Sleepiq", "Binary Sensor : Spc", "Binary Sensor : Tahoma", "Binary Sensor : Tapsaff", "Binary Sensor : Tcp", "Binary Sensor : Tellduslive", "Binary Sensor : Template", "Binary Sensor : Tesla", "Binary Sensor : Threshold", "Binary Sensor : Trend", "Binary Sensor : Upcloud", "Binary Sensor : Uptimerobot", "Binary Sensor : Velbus", "Binary Sensor : Vera", "Binary Sensor : Verisure", "Binary Sensor : Volvooncall", "Binary Sensor : Vultr", "Binary Sensor : Wemo", "Binary Sensor : Wink", "Binary Sensor : Wirelesstag", "Binary Sensor : Workday", "Binary Sensor : Xiaomi Aqara", "Binary Sensor : Zha", "Binary Sensor : Zigbee", "Binary Sensor : Zwave", "Blink", "Bloomsky", "Browser", "Calendar : Caldav", "Calendar : Google", "Calendar : Todoist", "Camera : Abode", "Camera : Amcrest", "Camera : Arlo", "Camera : August", "Camera : Axis", "Camera : Blink", "Camera : Bloomsky", "Camera : Canary", "Camera : Doorbird", "Camera : Familyhub", "Camera : Ffmpeg", "Camera : Foscam", "Camera : Generic", "Camera : Local File", "Camera : Mjpeg", "Camera : Mqtt", "Camera : Neato", "Camera : Nest", "Camera : Netatmo", "Camera : Onvif", "Camera : Proxy", "Camera : Push", "Camera : Ring", "Camera : Rpi Camera", "Camera : Skybell", "Camera : Synology", "Camera : Usps", "Camera : Uvc", "Camera : Verisure", "Camera : Xeoma", "Camera : Xiaomi", "Camera : Yi", "Camera : Zoneminder", "Canary", "Climate : Daikin", "Climate : Ecobee", "Climate : Econet", "Climate : Ephember", "Climate : Eq3btsmart", "Climate : Flexit", "Climate : Fritzbox", "Climate : Generic Thermostat", "Climate : Heatmiser", "Climate : Hive", "Climate : Homekit Controller", "Climate : Homematic", "Climate : Homematicip Cloud", "Climate : Honeywell", "Climate : Knx", "Climate : Maxcube", "Climate : Melissa", "Climate : Modbus", "Climate : Mqtt", "Climate : Mysensors", "Climate : Nest", "Climate : Netatmo", "Climate : Nuheat", "Climate : Oem", "Climate : Proliphix", "Climate : Radiotherm", "Climate : Sensibo", "Climate : Spider", "Climate : Tado", "Climate : Tesla", "Climate : Toon", "Climate : Touchline", "Climate : Tuya", "Climate : Venstar", "Climate : Vera", "Climate : Wink", "Climate : Zhong Hong", "Climate : Zwave", "Cloud : Auth Api", "Cloud : Const", "Cloud : Http Api", "Cloud : Iot", "Cloudflare", "Coinbase", "Comfoconnect", "Configurator", "Cover : Abode", "Cover : Aladdin Connect", "Cover : Brunt", "Cover : Command Line", "Cover : Garadget", "Cover : Gogogate2", "Cover : Group", "Cover : Homematic", "Cover : Isy994", "Cover : Knx", "Cover : Lutron", "Cover : Lutron Caseta", "Cover : Mqtt", "Cover : Myq", "Cover : Mysensors", "Cover : Opengarage", "Cover : Rflink", "Cover : Rfxtrx", "Cover : Rpi Gpio", "Cover : Ryobi Gdo", "Cover : Scsgate", "Cover : Tahoma", "Cover : Tellduslive", "Cover : Tellstick", "Cover : Template", "Cover : Tuya", "Cover : Velbus", "Cover : Vera", "Cover : Wink", "Cover : Xiaomi Aqara", "Cover : Zwave", "Daikin", "Datadog", "Deconz : Config Flow", "Deconz : Const", "Device Sun Light Trigger", "Device Tracker : Actiontec", "Device Tracker : Aruba", "Device Tracker : Asuswrt", "Device Tracker : Automatic", "Device Tracker : Bbox", "Device Tracker : Bluetooth Le Tracker", "Device Tracker : Bluetooth Tracker", "Device Tracker : Bmw Connected Drive", "Device Tracker : Bt Home Hub 5", "Device Tracker : Cisco Ios", "Device Tracker : Ddwrt", "Device Tracker : Freebox", "Device Tracker : Fritz", "Device Tracker : Geofency", "Device Tracker : Google Maps", "Device Tracker : Gpslogger", "Device Tracker : Hitron Coda", "Device Tracker : Huawei Router", "Device Tracker : Icloud", "Device Tracker : Keenetic Ndms2", "Device Tracker : Linksys Ap", "Device Tracker : Linksys Smart", "Device Tracker : Locative", "Device Tracker : Luci", "Device Tracker : Meraki", "Device Tracker : Mikrotik", "Device Tracker : Mqtt", "Device Tracker : Mqtt Json", "Device Tracker : Mysensors", "Device Tracker : Netgear", "Device Tracker : Nmap Tracker", "Device Tracker : Owntracks", "Device Tracker : Owntracks Http", "Device Tracker : Ping", "Device Tracker : Ritassist", "Device Tracker : Sky Hub", "Device Tracker : Snmp", "Device Tracker : Swisscom", "Device Tracker : Tado", "Device Tracker : Tesla", "Device Tracker : Thomson", "Device Tracker : Tile", "Device Tracker : Tomato", "Device Tracker : Tplink", "Device Tracker : Trackr", "Device Tracker : Ubus", "Device Tracker : Unifi", "Device Tracker : Unifi Direct", "Device Tracker : Upc Connect", "Device Tracker : Volvooncall", "Device Tracker : Xiaomi", "Device Tracker : Xiaomi Miio", "Dialogflow", "Digital Ocean", "Discovery", "Dominos", "Doorbird", "Downloader", "Duckdns", "Dweet", "Dyson", "Ecobee", "Egardia", "Eight Sleep", "Emoncms History", "Emulated Hue : Hue Api", "Emulated Hue : Upnp", "Enocean", "Envisalink", "Eufy", "Fan : Comfoconnect", "Fan : Dyson", "Fan : Insteon Local", "Fan : Insteon Plm", "Fan : Isy994", "Fan : Mqtt", "Fan : Template", "Fan : Tuya", "Fan : Wink", "Fan : Xiaomi Miio", "Fan : Zha", "Fan : Zwave", "Feedreader", "Ffmpeg", "Folder Watcher", "Foursquare", "Freedns", "Fritzbox", "Gc100", "Goalfeed", "Google", "Google Assistant : Auth", "Google Assistant : Const", "Google Assistant : Helpers", "Google Assistant : Http", "Google Assistant : Smart Home", "Google Assistant : Trait", "Google Domains", "Graphite", "Hassio : Handler", "Hassio : Http", "Hdmi Cec", "History", "History Graph", "Hive", "Homekit : Accessories", "Homekit : Const", "Homekit : Type Covers", "Homekit : Type Fans", "Homekit : Type Lights", "Homekit : Type Locks", "Homekit : Type Media Players", "Homekit : Type Security Systems", "Homekit : Type Sensors", "Homekit : Type Switches", "Homekit : Type Thermostats", "Homekit : Util", "Homematicip Cloud : Config Flow", "Homematicip Cloud : Const", "Homematicip Cloud : Device", "Homematicip Cloud : Errors", "Homematicip Cloud : Hap", "Hue : Bridge", "Hue : Config Flow", "Hue : Const", "Hue : Errors", "Hydrawise", "Ifttt", "Ihc : Const", "Ihc : Ihcdevice", "Image Processing : Dlib Face Detect", "Image Processing : Dlib Face Identify", "Image Processing : Facebox", "Image Processing : Microsoft Face Detect", "Image Processing : Microsoft Face Identify", "Image Processing : Openalpr Cloud", "Image Processing : Openalpr Local", "Image Processing : Opencv", "Image Processing : Seven Segments", "Influxdb", "Input Boolean", "Input Datetime", "Input Number", "Input Select", "Input Text", "Insteon Local", "Intent Script", "Introduction", "Ios", "Iota", "Isy994", "Joaoapps Join", "Juicenet", "Keyboard", "Keyboard Remote", "Kira", "Knx", "Konnected", "Lametric", "Light : Abode", "Light : Ads", "Light : Avion", "Light : Blinksticklight", "Light : Blinkt", "Light : Deconz", "Light : Decora", "Light : Decora Wifi", "Light : Enocean", "Light : Eufy", "Light : Flux Led", "Light : Futurenow", "Light : Greenwave", "Light : Group", "Light : Hive", "Light : Homekit Controller", "Light : Homematic", "Light : Homematicip Cloud", "Light : Hue", "Light : Hyperion", "Light : Iglo", "Light : Ihc", "Light : Insteon Local", "Light : Insteon Plm", "Light : Isy994", "Light : Knx", "Light : Lifx", "Light : Lifx Legacy", "Light : Limitlessled", "Light : Litejet", "Light : Lutron", "Light : Lutron Caseta", "Light : Lw12wifi", "Light : Mochad", "Light : Mqtt", "Light : Mqtt Json", "Light : Mqtt Template", "Light : Mysensors", "Light : Mystrom", "Light : Nanoleaf Aurora", "Light : Osramlightify", "Light : Piglow", "Light : Qwikswitch", "Light : Rflink", "Light : Rfxtrx", "Light : Rpi Gpio Pwm", "Light : Scsgate", "Light : Sensehat", "Light : Sisyphus", "Light : Skybell", "Light : Tellduslive", "Light : Tellstick", "Light : Template", "Light : Tikteck", "Light : Tplink", "Light : Tradfri", "Light : Tuya", "Light : Vera", "Light : Wemo", "Light : Wink", "Light : X10", "Light : Xiaomi Aqara", "Light : Xiaomi Miio", "Light : Yeelight", "Light : Yeelightsunflower", "Light : Zengge", "Light : Zha", "Light : Zigbee", "Light : Zwave", "Linode", "Lirc", "Litejet", "Lock : Abode", "Lock : August", "Lock : Bmw Connected Drive", "Lock : Homematic", "Lock : Isy994", "Lock : Kiwi", "Lock : Lockitron", "Lock : Mqtt", "Lock : Nello", "Lock : Nuki", "Lock : Sesame", "Lock : Tesla", "Lock : Vera", "Lock : Verisure", "Lock : Volvooncall", "Lock : Wink", "Lock : Xiaomi Aqara", "Lock : Zwave", "Logbook", "Logentries", "Logger", "Lutron", "Lutron Caseta", "Mailbox : Asterisk Mbox", "Mailgun", "Map", "Matrix", "Maxcube", "Media Extractor", "Media Player : Anthemav", "Media Player : Apple Tv", "Media Player : Aquostv", "Media Player : Blackbird", "Media Player : Bluesound", "Media Player : Braviatv", "Media Player : Cast", "Media Player : Channels", "Media Player : Clementine", "Media Player : Cmus", "Media Player : Denon", "Media Player : Denonavr", "Media Player : Directv", "Media Player : Dlna Dmr", "Media Player : Dunehd", "Media Player : Emby", "Media Player : Epson", "Media Player : Firetv", "Media Player : Frontier Silicon", "Media Player : Gpmdp", "Media Player : Gstreamer", "Media Player : Hdmi Cec", "Media Player : Horizon", "Media Player : Itunes", "Media Player : Kodi", "Media Player : Lg Netcast", "Media Player : Liveboxplaytv", "Media Player : Mediaroom", "Media Player : Monoprice", "Media Player : Mpchc", "Media Player : Mpd", "Media Player : Nad", "Media Player : Nadtcp", "Media Player : Onkyo", "Media Player : Openhome", "Media Player : Panasonic Viera", "Media Player : Pandora", "Media Player : Philips Js", "Media Player : Pioneer", "Media Player : Pjlink", "Media Player : Plex", "Media Player : Roku", "Media Player : Russound Rio", "Media Player : Russound Rnet", "Media Player : Samsungtv", "Media Player : Sisyphus", "Media Player : Snapcast", "Media Player : Songpal", "Media Player : Sonos", "Media Player : Soundtouch", "Media Player : Spotify", "Media Player : Squeezebox", "Media Player : Ue Smart Radio", "Media Player : Universal", "Media Player : Vizio", "Media Player : Vlc", "Media Player : Volumio", "Media Player : Webostv", "Media Player : Xiaomi Tv", "Media Player : Yamaha", "Media Player : Yamaha Musiccast", "Media Player : Ziggo Mediabox Xl", "Melissa", "Microsoft Face", "Mochad", "Modbus", "Mqtt : Discovery", "Mqtt : Server", "Mqtt Eventstream", "Mqtt Statestream", "Mychevy", "Mycroft", "Mysensors : Const", "Mysensors : Device", "Mysensors : Gateway", "Namecheapdns", "Neato", "Nest : Config Flow", "Nest : Const", "Nest : Local Auth", "Netatmo", "Netgear Lte", "Notify : Apns", "Notify : Aws Lambda", "Notify : Aws Sns", "Notify : Aws Sqs", "Notify : Ciscospark", "Notify : Clickatell", "Notify : Clicksend", "Notify : Clicksend Tts", "Notify : Command Line", "Notify : Discord", "Notify : Ecobee", "Notify : Facebook", "Notify : File", "Notify : Flock", "Notify : Free Mobile", "Notify : Gntp", "Notify : Group", "Notify : Hipchat", "Notify : Html5", "Notify : Instapush", "Notify : Ios", "Notify : Joaoapps Join", "Notify : Knx", "Notify : Kodi", "Notify : Lametric", "Notify : Lannouncer", "Notify : Llamalab Automate", "Notify : Mailgun", "Notify : Mastodon", "Notify : Matrix", "Notify : Message Bird", "Notify : Mycroft", "Notify : Mysensors", "Notify : Netgear Lte", "Notify : Nfandroidtv", "Notify : Prowl", "Notify : Pushbullet", "Notify : Pushetta", "Notify : Pushover", "Notify : Pushsafer", "Notify : Rest", "Notify : Rocketchat", "Notify : Sendgrid", "Notify : Simplepush", "Notify : Slack", "Notify : Smtp", "Notify : Stride", "Notify : Synology Chat", "Notify : Syslog", "Notify : Telegram", "Notify : Twilio Call", "Notify : Twilio Sms", "Notify : Twitter", "Notify : Webostv", "Notify : Xmpp", "Notify : Yessssms", "No Ip", "Nuheat", "Nuimo Controller", "Octoprint", "Onboarding : Const", "Onboarding : Views", "Openuv", "Panel Custom", "Panel Iframe", "Pilight", "Plant", "Prometheus", "Proximity", "Python Script", "Qwikswitch", "Rachio", "Rainbird", "Raincloud", "Raspihats", "Recorder : Const", "Recorder : Migration", "Recorder : Models", "Recorder : Purge", "Recorder : Util", "Remote : Apple Tv", "Remote : Harmony", "Remote : Itach", "Remote : Kira", "Remote : Xiaomi Miio", "Rest Command", "Rflink", "Rfxtrx", "Ring", "Rpi Gpio", "Rpi Pfio", "Rss Feed Template", "Sabnzbd", "Satel Integra", "Scene : Deconz", "Scene : Homeassistant", "Scene : Hunterdouglas Powerview", "Scene : Knx", "Scene : Lifx Cloud", "Scene : Litejet", "Scene : Lutron Caseta", "Scene : Tahoma", "Scene : Tuya", "Scene : Velux", "Scene : Vera", "Scene : Wink", "Script", "Scsgate", "Sensor : Abode", "Sensor : Ads", "Sensor : Airvisual", "Sensor : Alarmdecoder", "Sensor : Alpha Vantage", "Sensor : Amcrest", "Sensor : Android Ip Webcam", "Sensor : Apcupsd", "Sensor : Api Streams", "Sensor : Arduino", "Sensor : Arest", "Sensor : Arlo", "Sensor : Arwn", "Sensor : Bbox", "Sensor : Bh1750", "Sensor : Bitcoin", "Sensor : Blink", "Sensor : Blockchain", "Sensor : Bloomsky", "Sensor : Bme280", "Sensor : Bme680", "Sensor : Bmw Connected Drive", "Sensor : Bom", "Sensor : Broadlink", "Sensor : Buienradar", "Sensor : Canary", "Sensor : Cert Expiry", "Sensor : Citybikes", "Sensor : Coinbase", "Sensor : Coinmarketcap", "Sensor : Comed Hourly Pricing", "Sensor : Comfoconnect", "Sensor : Command Line", "Sensor : Cpuspeed", "Sensor : Crimereports", "Sensor : Cups", "Sensor : Currencylayer", "Sensor : Daikin", "Sensor : Darksky", "Sensor : Deconz", "Sensor : Deluge", "Sensor : Deutsche Bahn", "Sensor : Dht", "Sensor : Discogs", "Sensor : Dnsip", "Sensor : Dovado", "Sensor : Dsmr", "Sensor : Dte Energy Bridge", "Sensor : Dublin Bus Transport", "Sensor : Duke Energy", "Sensor : Dwd Weather Warnings", "Sensor : Dweet", "Sensor : Dyson", "Sensor : Ebox", "Sensor : Ecobee", "Sensor : Eddystone Temperature", "Sensor : Efergy", "Sensor : Eight Sleep", "Sensor : Eliqonline", "Sensor : Emoncms", "Sensor : Enocean", "Sensor : Enphase Envoy", "Sensor : Envirophat", "Sensor : Envisalink", "Sensor : Etherscan", "Sensor : Fail2ban", "Sensor : Fastdotcom", "Sensor : Fedex", "Sensor : Fido", "Sensor : File", "Sensor : Filesize", "Sensor : Filter", "Sensor : Fints", "Sensor : Fitbit", "Sensor : Fixer", "Sensor : Folder", "Sensor : Foobot", "Sensor : Fritzbox Callmonitor", "Sensor : Fritzbox Netmonitor", "Sensor : Gearbest", "Sensor : Geizhals", "Sensor : Geo Rss Events", "Sensor : Gitter", "Sensor : Glances", "Sensor : Google Travel Time", "Sensor : Google Wifi", "Sensor : Gpsd", "Sensor : Gtfs", "Sensor : Haveibeenpwned", "Sensor : Hddtemp", "Sensor : History Stats", "Sensor : Hive", "Sensor : Homematic", "Sensor : Homematicip Cloud", "Sensor : Hp Ilo", "Sensor : Htu21d", "Sensor : Hydrawise", "Sensor : Hydroquebec", "Sensor : Ihc", "Sensor : Imap", "Sensor : Imap Email Content", "Sensor : Influxdb", "Sensor : Insteon Plm", "Sensor : Ios", "Sensor : Iota", "Sensor : Iperf3", "Sensor : Irish Rail Transport", "Sensor : Isy994", "Sensor : Juicenet", "Sensor : Kira", "Sensor : Knx", "Sensor : Kwb", "Sensor : Lacrosse", "Sensor : Lastfm", "Sensor : Linux Battery", "Sensor : London Air", "Sensor : London Underground", "Sensor : Loopenergy", "Sensor : Luftdaten", "Sensor : Lyft", "Sensor : Magicseaweed", "Sensor : Melissa", "Sensor : Metoffice", "Sensor : Mfi", "Sensor : Mhz19", "Sensor : Miflora", "Sensor : Min Max", "Sensor : Mitemp Bt", "Sensor : Modbus", "Sensor : Modem Callerid", "Sensor : Mold Indicator", "Sensor : Moon", "Sensor : Mopar", "Sensor : Mqtt", "Sensor : Mqtt Room", "Sensor : Mvglive", "Sensor : Mychevy", "Sensor : Mysensors", "Sensor : Nederlandse Spoorwegen", "Sensor : Nest", "Sensor : Netatmo", "Sensor : Netatmo Public", "Sensor : Netdata", "Sensor : Netgear Lte", "Sensor : Neurio Energy", "Sensor : Nsw Fuel Station", "Sensor : Nut", "Sensor : Nzbget", "Sensor : Octoprint", "Sensor : Ohmconnect", "Sensor : Onewire", "Sensor : Openevse", "Sensor : Openexchangerates", "Sensor : Openhardwaremonitor", "Sensor : Opensky", "Sensor : Openuv", "Sensor : Openweathermap", "Sensor : Otp", "Sensor : Pilight", "Sensor : Pi Hole", "Sensor : Plex", "Sensor : Pocketcasts", "Sensor : Pollen", "Sensor : Postnl", "Sensor : Pushbullet", "Sensor : Pvoutput", "Sensor : Pyload", "Sensor : Qnap", "Sensor : Qwikswitch", "Sensor : Radarr", "Sensor : Rainbird", "Sensor : Raincloud", "Sensor : Rainmachine", "Sensor : Random", "Sensor : Rest", "Sensor : Rflink", "Sensor : Rfxtrx", "Sensor : Ring", "Sensor : Ripple", "Sensor : Rmvtransport", "Sensor : Sabnzbd", "Sensor : Scrape", "Sensor : Season", "Sensor : Sense", "Sensor : Sensehat", "Sensor : Serial", "Sensor : Serial Pm", "Sensor : Shodan", "Sensor : Sht31", "Sensor : Sigfox", "Sensor : Simulated", "Sensor : Skybeacon", "Sensor : Skybell", "Sensor : Sleepiq", "Sensor : Sma", "Sensor : Smappee", "Sensor : Snmp", "Sensor : Sochain", "Sensor : Socialblade", "Sensor : Sonarr", "Sensor : Speedtest", "Sensor : Spotcrime", "Sensor : Sql", "Sensor : Startca", "Sensor : Statistics", "Sensor : Steam Online", "Sensor : Supervisord", "Sensor : Swiss Hydrological Data", "Sensor : Swiss Public Transport", "Sensor : Syncthru", "Sensor : Synologydsm", "Sensor : Systemmonitor", "Sensor : Sytadin", "Sensor : Tado", "Sensor : Tahoma", "Sensor : Tank Utility", "Sensor : Tcp", "Sensor : Ted5000", "Sensor : Teksavvy", "Sensor : Tellduslive", "Sensor : Tellstick", "Sensor : Temper", "Sensor : Template", "Sensor : Tesla", "Sensor : Thethingsnetwork", "Sensor : Thinkingcleaner", "Sensor : Tibber", "Sensor : Time Date", "Sensor : Toon", "Sensor : Torque", "Sensor : Tradfri", "Sensor : Trafikverket Weatherstation", "Sensor : Transmission", "Sensor : Travisci", "Sensor : Twitch", "Sensor : Uber", "Sensor : Uk Transport", "Sensor : Upnp", "Sensor : Ups", "Sensor : Uptime", "Sensor : Uscis", "Sensor : Usps", "Sensor : Vasttrafik", "Sensor : Vera", "Sensor : Verisure", "Sensor : Version", "Sensor : Viaggiatreno", "Sensor : Volvooncall", "Sensor : Vultr", "Sensor : Waqi", "Sensor : Waterfurnace", "Sensor : Waze Travel Time", "Sensor : Whois", "Sensor : Wink", "Sensor : Wirelesstag", "Sensor : Worldclock", "Sensor : Worldtidesinfo", "Sensor : Worxlandroid", "Sensor : Wsdot", "Sensor : Wunderground", "Sensor : Xbox Live", "Sensor : Xiaomi Aqara", "Sensor : Xiaomi Miio", "Sensor : Yahoo Finance", "Sensor : Yr", "Sensor : Yweather", "Sensor : Zabbix", "Sensor : Zamg", "Sensor : Zestimate", "Sensor : Zha", "Sensor : Zigbee", "Sensor : Zoneminder", "Sensor : Zwave", "Shell Command", "Shiftr", "Shopping List", "Sisyphus", "Skybell", "Sleepiq", "Smappee", "Snips", "Spaceapi", "Spc", "Spider", "Splunk", "Statsd", "Sun", "Switch : Abode", "Switch : Acer Projector", "Switch : Ads", "Switch : Amcrest", "Switch : Android Ip Webcam", "Switch : Anel Pwrctrl", "Switch : Arduino", "Switch : Arest", "Switch : Bbb Gpio", "Switch : Broadlink", "Switch : Command Line", "Switch : Deconz", "Switch : Deluge", "Switch : Digitalloggers", "Switch : Digital Ocean", "Switch : Dlink", "Switch : Doorbird", "Switch : Edimax", "Switch : Enocean", "Switch : Eufy", "Switch : Flux", "Switch : Fritzbox", "Switch : Fritzdect", "Switch : Gc100", "Switch : Hdmi Cec", "Switch : Hikvisioncam", "Switch : Hive", "Switch : Homekit Controller", "Switch : Homematic", "Switch : Homematicip Cloud", "Switch : Hook", "Switch : Hydrawise", "Switch : Ihc", "Switch : Insteon Local", "Switch : Insteon Plm", "Switch : Isy994", "Switch : Kankun", "Switch : Knx", "Switch : Konnected", "Switch : Linode", "Switch : Litejet", "Switch : Lutron Caseta", "Switch : Mfi", "Switch : Mochad", "Switch : Modbus", "Switch : Mqtt", "Switch : Mysensors", "Switch : Mystrom", "Switch : Neato", "Switch : Netio", "Switch : Orvibo", "Switch : Pilight", "Switch : Pulseaudio Loopback", "Switch : Qwikswitch", "Switch : Rachio", "Switch : Rainbird", "Switch : Raincloud", "Switch : Rainmachine", "Switch : Raspihats", "Switch : Rest", "Switch : Rflink", "Switch : Rfxtrx", "Switch : Rpi Gpio", "Switch : Rpi Pfio", "Switch : Rpi Rf", "Switch : Scsgate", "Switch : Skybell", "Switch : Smappee", "Switch : Snmp", "Switch : Spider", "Switch : Tahoma", "Switch : Tellduslive", "Switch : Tellstick", "Switch : Telnet", "Switch : Template", "Switch : Tesla", "Switch : Thinkingcleaner", "Switch : Toon", "Switch : Tplink", "Switch : Transmission", "Switch : Tuya", "Switch : Upcloud", "Switch : Velbus", "Switch : Vera", "Switch : Verisure", "Switch : Vesync", "Switch : Volvooncall", "Switch : Vultr", "Switch : Wake On Lan", "Switch : Wemo", "Switch : Wink", "Switch : Wirelesstag", "Switch : Xiaomi Aqara", "Switch : Xiaomi Miio", "Switch : Zha", "Switch : Zigbee", "Switch : Zoneminder", "Switch : Zwave", "Tado", "Tahoma", "Telegram Bot : Broadcast", "Telegram Bot : Polling", "Telegram Bot : Webhooks", "Tellduslive", "Tellstick", "Tesla", "Thethingsnetwork", "Thingspeak", "Toon", "Tradfri", "Tts : Amazon Polly", "Tts : Baidu", "Tts : Google", "Tts : Marytts", "Tts : Microsoft", "Tts : Picotts", "Tts : Voicerss", "Tts : Yandextts", "Tuya", "Twilio", "Upcloud", "Updater", "Upnp", "Usps", "Vacuum : Dyson", "Vacuum : Mqtt", "Vacuum : Neato", "Vacuum : Roomba", "Vacuum : Xiaomi Miio", "Velbus", "Velux", "Vera", "Verisure", "Volvooncall", "Vultr", "Wake On Lan", "Waterfurnace", "Watson Iot", "Weather : Bom", "Weather : Buienradar", "Weather : Darksky", "Weather : Ecobee", "Weather : Ipma", "Weather : Metoffice", "Weather : Openweathermap", "Weather : Yweather", "Weather : Zamg", "Weblink", "Websocket Api", "Wemo", "Wirelesstag", "Xiaomi Aqara", "Zabbix", "Zeroconf", "Zha : Const", "Zigbee", "Zone : Config Flow", "Zone : Const", "Zone : Zone", "Zoneminder", "Zwave : Const", "Zwave : Discovery Schemas", "Zwave : Node Entity", "Zwave : Util", "Zwave : Workaround", "Custom", "Other"];
  json = {
    surveyPostId: '5dccee55-3138-4813-9280-b57b90a52f3c',
    title: 'Home Assistant Survey',
    showProgressBar: 'top',
    showNavigationButtons: true,
    pages: [
      {
        elements: [
          {
            type: "html",
            name: "background",
            html: "<html>" +
            "  <body>" +
            "    <h4><strong>Section I : Consent</strong></h4>\r\n" +
            "  </body>" +
            "</html>",
          },
          {
            type: "html",
            name: "consent",
            html: "<html>\r\n" +
            "  <body>\r\n" +
            "    <h2>Understanding Real-World Experiences with Smart Home Systems</h2>\r\n" +
            "    <div style='white-space: pre-wrap;'>The purpose of this research study is to understand users’ experiences with home automation. We are doing this study to understand what automations people have, what works well, what obstacles they face, and what additional types of automations are users interested in.\r\n" +
            "\r\n" +
            "The questions in this survey are related to your experiences with home automation using Home Assistant. No personal information will be collected. As a part of this survey, we ask that you share parts of your configuration files. Please be sure to remove any private information before sharing them, including any API keys, usernames, or passwords that appear. We will analyze the data you share to help us understand your experiences with home automation. We do not anticipate any risks associated with sharing this information or participating in this survey, however you can withdraw your participation in this study at any point. \r\n" +
            "\r\n" +
            "The data will be stored on a password protected server to ensure confidentiality and security which will be accessible to research team working on this project.\r\n" +
            "\r\n" +
            "If you have any questions complaints or if you feel you have been harmed by this research please contact Jason Wiese, Assistant Professor, School of Computing, University of Utah, 801-581-6711.  \r\n" +
            "\r\n" +
            "Contact the Institutional Review Board (IRB) if you have questions regarding your rights as a research participant. Also, contact the IRB if you have questions, complaints or concerns which you do not feel you can discuss with the investigator. The University of Utah IRB may be reached by phone at \r\n(801) 581-3655 or by e-mail at irb@hsc.utah.edu." +
            "\r\n" +
            "\r\nIt should take 15-20 minutes to complete the questionnaire. Participation in this study is voluntary. You can choose not to take part. You can choose not to finish the questionnaire or omit any question you prefer not to answer without penalty or loss of benefits.  \r\n" +
            "\r\n" +
            "By submitting this questionnaire, you are giving your consent to participate.\r\n" +
            "\r\n<strong>Electronic Consent : Clicking on the \"agree\" button below indicates that:" +
            "<ul>" +
            "  <li>You have read the above information</li>" +
            "  <li>You voluntarily agree to participate</li>" +
            "  <li>You are at least 18 years of age </li>" +
            "</ul>" +
            "If you do not wish to participate in the research study, please decline participation by clicking on the \"disagree\" button.\r\n\r\n" +
            "</strong>"+
            "We thank you for taking the time out to participate in this survey. Your responses are valuable to us!\r\n" +
            "</div>" +
            "  </body>" +
            "</html>",
          },
          {
            type: "radiogroup",
            name: "consent",
            title: "Electronic Consent : Please select your choice below.\r\n",
            renderAs: "prettycheckbox",
            isRequired: true,
            colCount: 0,
            choices: ["Agree", "Disagree"]
          }
        ]

      },
      {
        visibleIf: "{consent} == 'Agree'",
        elements: [
          {
            type: "html",
            name: "background",
            html: "<html>" +
            "  <body>" +
            "    <h4><strong>Section II : Background</strong></h4>\r\n" +
            "  </body>" +
            "</html>",
          },
          {
            type: "radiogroup",
            name: "usage",
            title: "How long have you been using Home Assistant?",
            isRequired: false,
            colCount: 1,
            choices: [
                "6 months",
                "1 year",
                "2 years",
                "> 2 years",
                "Prefer not to answer",
            ]
          },
          {
              name: "alternative",
              type: "text",
              isRequired: false,
              title: "Have you used any alternative system for home automation except Home Assistant? If so, what?",
          },
          {
              name: "choiceoverothers",
              type: "comment",
              isRequired: false,
              title: "Why did you choose Home Assistant over other home automation systems?",
          },
          {
            type: "radiogroup",
            name: "platform",
            title: "What platform is your Home Assistant installed on?",
            isRequired: false,
            colCount: 1,
            choices: [
                "Hass.io",
                "Hasbian",
                "Docker",
                "Other",
                "Prefer not to answer",
            ]
          },
          {
            name: "otherplatform",
            type: "text",
            isRequired: false,
            visibleIf: "{platform} == 'Other'",
            title: "Which other platform are you using?",
          },
          {
            type: "radiogroup",
            name: "hardware",
            title: "What platform is your Home Assistant installed on?",
            isRequired: false,
            colCount: 1,
            choices: [
                "Raspberry Pi",
                "Arduino",
                "Virtual Machine",
                "Other",
                "Prefer not to answer",
            ]
          },
          {
            name: "otherhardware",
            type: "text",
            isRequired: false,
            visibleIf: "{hardware} == 'Other'",
            title: "Which other hardware are you using?",
          },
          {
            type: "dropdown",
            name: "vmsoftware",
            isRequired: false,
            title: "Select the software on which you are deploying the virtual machine",
            visibleIf: "{hardware} == 'Virtual Machine'",
            choices: ["VMWare", "Virtual Box", "KVM", "QEMU", "Parallel Desktops", "OpenVZ", "MobaLiveCD", "Other", "Prefer not to answer"]
          },
          {
            type: "dropdown",
            name: "vmos",
            isRequired: false,
            title: "Select the operating system of the system on which the virtual machine is desployed",
            visibleIf: "{hardware} == 'Virtual Machine'",
            choices: ["Linux 64 bits", "Linux 32 bits", "Windows 64 bits", "Windows 32 bits", "Mac OS", "Other", "Prefer not to answer"]
          },
          {
            type: 'file',
            title: 'Please upload your conguration and automation YAML files. Be sure to remove any sensitive information (e.g. API keys, usernames, or passwords), replacing them with alternative text such as \"AAAA\". Also, do not upload any secret.yaml files. Accepted types : .yaml, .yml and .zip ONLY',
            name: 'yamlfiles',
            description: "",
            isRequired: false,
            storeDataAsText: false,
            allowMultiple: true,
            acceptedTypes: ".yaml,.yml,.zip",
            showPreview: true,
            maxSize: 10240000
          },
          {
            name: "diy_info",
            type: "comment",
            isRequired: true,
            title: "Have you built any DIY/custom components/sensors to integrate with your Home Assistant? If yes, then please share details.",
            placeHolder: "Arduino component, ESP8266, etc",
          },
        ]
      },
      {
        visibleIf: "{consent} == 'Agree'",
        name: "automations",
        navigationButtonsVisibility: "show",
        title: "Automations",
        elements : [
          {
            type: "html",
            name: "automations_uploaded",
            html: "<html>" +
            "  <body>" +
            "    <h4><strong>Section III : Automations</strong></h4>\r\n" +
            "    This section is related to Automations. \r\n"+
            "  </body>" +
            "</html>",
            visible: false,
          },
          {
            type: "html",
            name: "automations_not_uploaded",
            html: "<html>" +
            "  <body>" +
            "    <h4><strong>Section III : Automations</strong></h4>\r\n" +
            "    This section is related to Automations. Please provide details regarding automations you have implemented. Please enter the purpose of the automation and answer following questions. You can provide details for upto 10 automations.\r\n"+
            "  </body>" +
            "</html>",
          },
          {
            type: "paneldynamic",
            name: "automation_details",
            title: "Please choose an automation and answer the following questions related to it",
            renderMode: "progressTopBottom",
            panelCount : 1,
            panelAddText: "Add automation",
            panelRemoveText: "Remove automation",
            templateElements: [
              {
                type: "dropdown",
                renderAs: "select2",
                name: "automation_choices",
                title: "Select your automation",
                isRequired: true,
                visibleIf: "{yamlfiles} notempty",
                choices: []
              },
              {
                type: "html",
                name: "automation_snippet",
                title: "Automation Snippet",
                visibleIf: "{panel.automation_choices} notempty",
                html: "<b>ok</b>"
              },
              {
                type: "text",
                name: "automation_title",
                isRequired: true,
                title: "Enter the title for your automation",
                visibleIf: "{yamlfiles} empty",
                placeHolder: "Activate day mode"
              },
              {
                type: "text",
                name: "automation_description",
                isRequired: true,
                title: "Describe what this automation does : ",
                placeHolder: "Turn bedroom lights on at 6:00 am"
              },
              {
                type: "tagbox",
                name: "automation_components",
                isRequired: true,
                title: "List the components used for the automation : ",
                choices: this.components
              },
              {
                type: "text",
                name: "automation_other",
                isRequired: true,
                title: "Please provide details regarding other component : ",
                placeholder: "DIY component",
                visibleIf: "{automation_components_1} contains 'Other'",
              },
              {
                type: "text",
                name: "automation_custom",
                isRequired: true,
                title: "Please provide details regarding custom component : ",
                placeholder: "DIY component",
                visibleIf: "{automation_components_1} contains 'Custom'",
              },
              {
                type: "rating",
                name: "automation_satisfaction",
                title: "How well does the automation work?",
                isRequired: true,
                rateValues: [1, 2, 3, 4, 5, 6, 7],
                minRateDescription: "Not well at all",
                maxRateDescription: "Perfect"
              },
              {
                type: "comment",
                name: "automation_what",
                isRequired: true,
                title: "Please explain what works well and does not work well with this automation?",
              },
              {
                type: "comment",
                name: "automation_why",
                isRequired: true,
                title: "Please explain why does the automation work well/not work well(i.e. if it needs to be improved, things you would want to change, does it meet your expectations?)",
              },
              {
                type: "rating",
                name: "automation_innovation",
                title: "Rate your automation in terms of innovation",
                isRequired: true,
                rateValues: [1, 2, 3, 4, 5, 6, 7],
                minRateDescription: "Not innovative",
                maxRateDescription: "Very innovation"
              },
              {
                type: "comment",
                name: "automation_resources",
                isRequired: true,
                title: "How did you come up with this automation? Did you think it up on your own? Did you refer any external resources?",
              },
            ],
          },
        ]
      },
      {
        name: "ha_satisfaction",
        visibleIf: "{consent} == 'Agree'",
        title: "Home Assistant Satisfaction",
        elements: [
          {
            type: "rating",
            isRequired: true,
            name: "ha_satisfaction_rating",
            title: "Rate your automation in terms of innovation",
            rateValues: [1, 2, 3, 4, 5, 6, 7],
            minRateDescription: "Not satisfied at all",
            maxRateDescription: "Very satisfied"
          },
          {
            type: "paneldynamic",
            name: "desired_automation_details",
            isRequired: true,
            title: "Please describe additional automations which you would like to add to your setup.",
            renderMode: "progressTopBottom",
            panelCount : 1,
            panelAddText: "Add desired automation",
            panelRemoveText: "Remove desired automation",
            templateElements: [
              {
                type: "text",
                name: "desired_automation_description",
                isRequired: true,
                title: "Describe what the desired automation will do : ",
                placeHolder: "Turn bedroom lights on at 6:00 am"
              },
              {
                type: "text",
                name: "desired_automation_reasons",
                isRequired: true,
                title: "What are the reasons that you have not yet implemented this automation?",
              },
              {
                type: "text",
                name: "desired_automation_components",
                isRequired: true,
                title: "What additional components would you need for this automation to work (if any)?",
              },
              {
                type: "rating",
                name: "desired_automation_difficulty",
                isRequired: true,
                title: "What level of difficulty would it be to set up this automation",
                rateValues: [1, 2, 3, 4, 5, 6, 7],
                minRateDescription: "Not difficult",
                maxRateDescription: "Very difficult"
              },
              {
                type: "comment",
                name: "desired_automation_difficulty_why",
                isRequired: true,
                title: "Explain your response to previous question.",
              },
            ],
          },
          {
            type: "comment",
            name: "component_difficulty",
            isRequired: true,
            title: "Are you facing any difficulty with specic hardware components? If so, please state the components and problems you are facing with each of them.",
          },
          {
            type: "rating",
            name: "ha_overall_satisfaction",
            isRequired: true,
            title: "What level of satisfaction do you feel with your Home Assistant?",
            rateValues: [1, 2, 3, 4, 5, 6, 7],
            minRateDescription: "Not satisfied",
            maxRateDescription: "Very satisfied"
          },
          {
            type: "comment",
            name: "ha_dissatisfation_why",
            isRequired: true,
            title: "Explain why you are dissatisfied with Home Assistant?",
            visibleIf: "{ha_overall_satisfaction} < 4"
          },
          {
            type: "comment",
            name: "ha_satisfication_why",
            isRequired: true,
            title: "Explain why you are satisfied with Home Assistant?",
            visibleIf: "{ha_overall_satisfaction} >= 4"
          },
          {
            type: "comment",
            name: "add_comments",
            isRequired: true,
            title: "Please provide any additional commments here : ",
          },
          {
            type: "text",
            name: "email_address",
            title: "If you would be willing to participate in a follow up interview over skype/hangouts (we would compensate you for your time), please provide your email address so that we can contact you.",
            validators: [
              {
                  type: "email"
              }
            ]
          },
        ],
      },
    ]
  };

  onSurveySaved(survey) {
    this.json = survey;
  }

  sendData(result) {
    // TODO update with your own behavior
    console.log(result);
  }

}
