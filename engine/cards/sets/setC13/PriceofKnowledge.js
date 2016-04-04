"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PriceofKnowledge extends Card {
  constructor(game) {
    super(game, "Price of Knowledge", "Commander 2013 Edition", "C13");
  }
}

module.exports = PriceofKnowledge;
