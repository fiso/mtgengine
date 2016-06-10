"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeedingFrenzy extends UnimplementedCard {
  constructor (game) {
    super(game, "Feeding Frenzy", "Onslaught", "ONS");
  }
}

module.exports = FeedingFrenzy;
