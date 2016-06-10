"use strict";
const Constants = require ("../../../Constants");
const AlabasterPotionBase = require("../set5ED/AlabasterPotion");

class AlabasterPotion extends AlabasterPotionBase {
  constructor (game) {
    super(game, "Alabaster Potion", "Legends", "LEG");
  }
}

module.exports = AlabasterPotion;
