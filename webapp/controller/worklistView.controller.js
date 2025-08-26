sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("testproject.controller.worklistView", {
        onInit: function () {

        },

        onPress: function () {
            var oText = this.byId("myText");
            oText.setText("Button Pressed!");
        },

        onDoNotPress: function () {
            sap.m.MessageBox.error("Do NOT Press this Button!!");
        }
    });
});
