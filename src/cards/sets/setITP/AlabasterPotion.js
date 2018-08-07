"use strict";
const Constants = require ("../../../Constants");
const AlabasterPotionBase = require("../setME3/AlabasterPotion");

class AlabasterPotion extends AlabasterPotionBase {
  constructor (game) {
    super(game, "Alabaster Potion", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = AlabasterPotion;
