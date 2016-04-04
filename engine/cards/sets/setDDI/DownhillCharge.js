"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DownhillCharge extends Card {
  constructor(game) {
    super(game, "Downhill Charge", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = DownhillCharge;
