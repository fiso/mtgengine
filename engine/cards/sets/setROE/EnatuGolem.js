"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnatuGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Enatu Golem", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EnatuGolem;
