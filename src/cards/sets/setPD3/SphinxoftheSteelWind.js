"use strict";
const Constants = require ("../../../Constants");
const SphinxoftheSteelWindBase = require("../setEMA/SphinxoftheSteelWind");

class SphinxoftheSteelWind extends SphinxoftheSteelWindBase {
  constructor (game) {
    super(game, "Sphinx of the Steel Wind", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = SphinxoftheSteelWind;
