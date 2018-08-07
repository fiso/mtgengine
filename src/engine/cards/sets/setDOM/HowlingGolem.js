"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HowlingGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Howling Golem", "Dominaria", "DOM");
  }
}

module.exports = HowlingGolem;
