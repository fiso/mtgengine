"use strict";
const Constants = require ("../../../Constants");
const HiguretheStillWindBase = require("../setBOK/HiguretheStillWind");

class HiguretheStillWind extends HiguretheStillWindBase {
  constructor(game) {
    super(game, "Higure, the Still Wind", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = HiguretheStillWind;
