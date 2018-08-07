"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Opportunity extends UnimplementedCard {
  constructor (game) {
    super(game, "Opportunity", "Battlebond", "BBD");
  }
}

module.exports = Opportunity;
