"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JonFinkelBio extends UnimplementedCard {
  constructor (game) {
    super(game, "Jon Finkel Bio", "World Championship Decks 2000", "WC00");
  }
}

module.exports = JonFinkelBio;
