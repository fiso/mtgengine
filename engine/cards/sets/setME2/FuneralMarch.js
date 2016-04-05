"use strict";
const Constants = require ("../../../Constants");
const FuneralMarchBase = require("../set5ED/FuneralMarch");

class FuneralMarch extends FuneralMarchBase {
  constructor(game) {
    super(game, "Funeral March", "Masters Edition II", "ME2");
  }
}

module.exports = FuneralMarch;
