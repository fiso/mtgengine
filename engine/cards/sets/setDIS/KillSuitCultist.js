"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KillSuitCultist extends Card {
  constructor(game) {
    super(game, "Kill-Suit Cultist", "Dissension", "DIS");
  }
}

module.exports = KillSuitCultist;
