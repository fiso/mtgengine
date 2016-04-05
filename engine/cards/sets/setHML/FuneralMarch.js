"use strict";
const Constants = require ("../../../Constants");
const FuneralMarchBase = require("../set5ED/FuneralMarch");

class FuneralMarch extends FuneralMarchBase {
  constructor(game) {
    super(game, "Funeral March", "Homelands", "HML");
  }
}

module.exports = FuneralMarch;
