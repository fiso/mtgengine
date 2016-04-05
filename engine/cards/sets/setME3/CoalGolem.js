"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoalGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Coal Golem", "Masters Edition III", "ME3");
  }
}

module.exports = CoalGolem;
