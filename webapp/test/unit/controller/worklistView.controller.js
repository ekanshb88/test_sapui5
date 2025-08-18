/*global QUnit*/

sap.ui.define([
	"testproject/controller/worklistView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("worklistView Controller");

	QUnit.test("I should test the worklistView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
