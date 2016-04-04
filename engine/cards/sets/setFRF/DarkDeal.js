"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarkDeal extends Card {
  constructor(game) {
    super(game, "Dark Deal", "Fate Reforged", "FRF");
  }
}

module.exports = DarkDeal;
