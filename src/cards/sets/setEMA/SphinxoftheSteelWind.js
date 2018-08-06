"use strict";
const Constants = require ("../../../Constants");
const SphinxoftheSteelWindBase = require("../setARB/SphinxoftheSteelWind");

class SphinxoftheSteelWind extends SphinxoftheSteelWindBase {
  constructor (game) {
    super(game, "Sphinx of the Steel Wind", "Eternal Masters", "EMA");
  }
}

module.exports = SphinxoftheSteelWind;
