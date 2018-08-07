"use strict";
const Constants = require ("../../../Constants");
const AlabasterPotionBase = require("../setME3/AlabasterPotion");

class AlabasterPotion extends AlabasterPotionBase {
  constructor (game) {
    super(game, "Alabaster Potion", "Legends", "LEG");
  }
}

module.exports = AlabasterPotion;
