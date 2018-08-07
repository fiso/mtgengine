"use strict";
const Constants = require ("../../../Constants");
const AlabasterPotionBase = require("../setME3/AlabasterPotion");

class AlabasterPotion extends AlabasterPotionBase {
  constructor (game) {
    super(game, "Alabaster Potion", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = AlabasterPotion;
