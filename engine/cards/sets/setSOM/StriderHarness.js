"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StriderHarnessBase = require("../setOGW/StriderHarness.js");

class StriderHarness extends StriderHarnessBase {
  constructor(game) {
    super(game, "Strider Harness", "Scars of Mirrodin", "SOM");
  }
}

module.exports = StriderHarness;
