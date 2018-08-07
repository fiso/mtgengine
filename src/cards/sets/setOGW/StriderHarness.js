"use strict";
const Constants = require ("../../../Constants");
const StriderHarnessBase = require("../setRIX/StriderHarness");

class StriderHarness extends StriderHarnessBase {
  constructor (game) {
    super(game, "Strider Harness", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = StriderHarness;
