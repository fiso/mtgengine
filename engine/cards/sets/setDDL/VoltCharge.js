"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoltCharge extends UnimplementedCard {
  constructor(game) {
    super(game, "Volt Charge", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = VoltCharge;
