"use strict";
const Constants = require ("../../../Constants");
const SphinxoftheSteelWindBase = require("../setEMA/SphinxoftheSteelWind");

class SphinxoftheSteelWind extends SphinxoftheSteelWindBase {
  constructor (game) {
    super(game, "Sphinx of the Steel Wind", "Alara Reborn", "ARB");
  }
}

module.exports = SphinxoftheSteelWind;
