"use strict";
const Constants = require ("../../../Constants");
const HiguretheStillWindBase = require("../setPCA/HiguretheStillWind");

class HiguretheStillWind extends HiguretheStillWindBase {
  constructor (game) {
    super(game, "Higure, the Still Wind", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HiguretheStillWind;
