"use strict";
const Constants = require ("../../../Constants");
const StriderHarnessBase = require("../setOGW/StriderHarness");

class StriderHarness extends StriderHarnessBase {
  constructor(game) {
    super(game, "Strider Harness", "Scars of Mirrodin", "SOM");
  }
}

module.exports = StriderHarness;
