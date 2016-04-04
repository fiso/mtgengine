"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoltCharge extends Card {
  constructor(game) {
    super(game, "Volt Charge", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = VoltCharge;
