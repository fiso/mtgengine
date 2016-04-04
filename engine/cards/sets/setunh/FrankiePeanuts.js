"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrankiePeanuts extends Card {
  constructor(game) {
    super(game, "Frankie Peanuts", "Unhinged", "UNH");
  }
}

module.exports = FrankiePeanuts;
