"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlagueSpitter extends UnimplementedCard {
  constructor (game) {
    super(game, "Plague Spitter", "World Championship Decks 2001", "WC01");
  }
}

module.exports = PlagueSpitter;
