"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PowerArmor extends Card {
  constructor(game) {
    super(game, "Power Armor", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PowerArmor;
