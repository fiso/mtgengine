"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PriceofKnowledge extends UnimplementedCard {
  constructor (game) {
    super(game, "Price of Knowledge", "Commander 2013", "C13");
  }
}

module.exports = PriceofKnowledge;
