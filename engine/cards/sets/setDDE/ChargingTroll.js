"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChargingTroll extends UnimplementedCard {
  constructor(game) {
    super(game, "Charging Troll", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = ChargingTroll;
