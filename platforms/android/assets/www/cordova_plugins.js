cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-actionsheet.ActionSheet",
        "file": "plugins/cordova-plugin-actionsheet/www/ActionSheet.js",
        "pluginId": "cordova-plugin-actionsheet",
        "clobbers": [
            "window.plugins.actionsheet"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
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
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.Common",
        "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/common.js",
        "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
        "clobbers": [
            "launchnavigator"
        ]
    },
    {
        "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LaunchNavigator",
        "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/android/launchnavigator.js",
        "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
        "merges": [
            "launchnavigator"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-actionsheet": "2.3.3",
    "cordova-plugin-console": "1.1.0",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-ionic-webview": "1.2.1",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-whitelist": "1.3.1",
    "ionic-plugin-keyboard": "2.2.1",
    "uk.co.workingedge.phonegap.plugin.launchnavigator": "3.2.2"
};
// BOTTOM OF METADATA
});