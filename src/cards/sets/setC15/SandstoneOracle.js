"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SandstoneOracle extends UnimplementedCard {
  constructor (game) {
    super(game, "Sandstone Oracle", "Commander 2015", "C15");
  }
}

module.exports = SandstoneOracle;
