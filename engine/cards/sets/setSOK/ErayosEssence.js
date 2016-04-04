"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ErayosEssence extends Card {
  constructor(game) {
    super(game, "Erayo's Essence", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ErayosEssence;
