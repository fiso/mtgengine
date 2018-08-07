"use strict";
const Constants = require ("../../../Constants");
const FuneralMarchBase = require("../setME2/FuneralMarch");

class FuneralMarch extends FuneralMarchBase {
  constructor (game) {
    super(game, "Funeral March", "Homelands", "HML");
  }
}

module.exports = FuneralMarch;
