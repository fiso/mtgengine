"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrianHackerBio extends UnimplementedCard {
  constructor (game) {
    super(game, "Brian Hacker Bio", "World Championship Decks 1998", "WC98");
  }
}

module.exports = BrianHackerBio;
