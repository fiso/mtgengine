"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StreambedAquitects extends UnimplementedCard {
  constructor (game) {
    super(game, "Streambed Aquitects", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = StreambedAquitects;
