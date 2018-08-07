"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrankiePeanuts extends UnimplementedCard {
  constructor (game) {
    super(game, "Frankie Peanuts", "Unhinged", "UNH");
  }
}

module.exports = FrankiePeanuts;
