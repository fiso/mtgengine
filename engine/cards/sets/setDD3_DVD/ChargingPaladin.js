"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChargingPaladin extends Card {
  constructor(game) {
    super(game, "Charging Paladin", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = ChargingPaladin;
