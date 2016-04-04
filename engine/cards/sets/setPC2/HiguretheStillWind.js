"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HiguretheStillWindBase = require("../setBOK/HiguretheStillWind.js");

class HiguretheStillWind extends HiguretheStillWindBase {
  constructor(game) {
    super(game, "Higure, the Still Wind", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = HiguretheStillWind;
