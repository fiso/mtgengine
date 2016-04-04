"use strict";
const Constants = require ("../../../Constants");
const UrzasChaliceBase = require("../setATQ/UrzasChalice");

class UrzasChalice extends UrzasChaliceBase {
  constructor(game) {
    super(game, "Urza's Chalice", "Masters Edition", "MED");
  }
}

module.exports = UrzasChalice;
