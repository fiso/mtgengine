"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrawGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Straw Golem", "Weatherlight", "WTH");
  }
}

module.exports = StrawGolem;
