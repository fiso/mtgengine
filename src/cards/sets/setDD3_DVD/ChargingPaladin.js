"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChargingPaladin extends UnimplementedCard {
  constructor(game) {
    super(game, "Charging Paladin", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = ChargingPaladin;
