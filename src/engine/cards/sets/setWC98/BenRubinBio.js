"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenRubinBio extends UnimplementedCard {
  constructor (game) {
    super(game, "Ben Rubin Bio", "World Championship Decks 1998", "WC98");
  }
}

module.exports = BenRubinBio;
