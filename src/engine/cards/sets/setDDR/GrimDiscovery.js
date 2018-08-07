"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimDiscovery extends UnimplementedCard {
  constructor (game) {
    super(game, "Grim Discovery", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = GrimDiscovery;
