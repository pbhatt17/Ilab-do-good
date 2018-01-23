cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-wkwebview-engine.ios-wkwebview-exec",
    "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js",
    "pluginId": "cordova-plugin-wkwebview-engine",
    "clobbers": [
      "cordova.exec"
    ]
  },
  {
    "id": "cordova-plugin-wkwebview-file-xhr.xhr-polyfill",
    "file": "plugins/cordova-plugin-wkwebview-file-xhr/src/www/ios/xhr-polyfill.js",
    "pluginId": "cordova-plugin-wkwebview-file-xhr",
    "runs": true
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-inappbrowser": "1.7.1",
  "cordova-plugin-statusbar": "2.2.3",
  "cordova-plugin-whitelist": "1.3.2",
  "cordova-plugin-wkwebview-engine": "1.1.3",
  "cordova-plugin-wkwebview-file-xhr": "1.0.0"
};
// BOTTOM OF METADATA
});