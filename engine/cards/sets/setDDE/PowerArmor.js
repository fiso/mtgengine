"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PowerArmor extends UnimplementedCard {
  constructor(game) {
    super(game, "Power Armor", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PowerArmor;
