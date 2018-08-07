"use strict";
const Constants = require ("../../../Constants");
const HiguretheStillWindBase = require("../setPCA/HiguretheStillWind");

class HiguretheStillWind extends HiguretheStillWindBase {
  constructor (game) {
    super(game, "Higure, the Still Wind", "Planechase 2012", "PC2");
  }
}

module.exports = HiguretheStillWind;
