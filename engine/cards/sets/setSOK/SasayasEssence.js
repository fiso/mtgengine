"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SasayasEssence extends Card {
  constructor(game) {
    super(game, "Sasaya's Essence", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SasayasEssence;
