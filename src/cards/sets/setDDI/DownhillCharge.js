"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DownhillCharge extends UnimplementedCard {
  constructor (game) {
    super(game, "Downhill Charge", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = DownhillCharge;
