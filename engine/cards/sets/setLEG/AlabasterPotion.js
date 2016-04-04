"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AlabasterPotionBase = require("../set5ED/AlabasterPotion.js");

class AlabasterPotion extends AlabasterPotionBase {
  constructor(game) {
    super(game, "Alabaster Potion", "Legends", "LEG");
  }
}

module.exports = AlabasterPotion;
