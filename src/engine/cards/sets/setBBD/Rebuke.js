"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rebuke extends UnimplementedCard {
  constructor (game) {
    super(game, "Rebuke", "Battlebond", "BBD");
  }
}

module.exports = Rebuke;
