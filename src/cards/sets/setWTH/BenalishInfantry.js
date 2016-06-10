"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenalishInfantry extends UnimplementedCard {
  constructor (game) {
    super(game, "Benalish Infantry", "Weatherlight", "WTH");
  }
}

module.exports = BenalishInfantry;
