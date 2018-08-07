"use strict";
const Constants = require ("../../../Constants");
const FuneralMarchBase = require("../setME2/FuneralMarch");

class FuneralMarch extends FuneralMarchBase {
  constructor (game) {
    super(game, "Funeral March", "Fifth Edition", "5ED");
  }
}

module.exports = FuneralMarch;
