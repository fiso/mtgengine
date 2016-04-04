"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleshbagMarauder extends UnimplementedCard {
  constructor(game) {
    super(game, "Fleshbag Marauder", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = FleshbagMarauder;
