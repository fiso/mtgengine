"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenalishMissionary extends UnimplementedCard {
  constructor(game) {
    super(game, "Benalish Missionary", "Weatherlight", "WTH");
  }
}

module.exports = BenalishMissionary;
