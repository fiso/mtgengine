"use strict";
const Constants = require ("../../../Constants");
const UrzasChaliceBase = require("../setATQ/UrzasChalice");

class UrzasChalice extends UrzasChaliceBase {
  constructor(game) {
    super(game, "Urza's Chalice", "Masters Edition IV", "ME4");
  }
}

module.exports = UrzasChalice;
