"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SandstoneOracle extends UnimplementedCard {
  constructor (game) {
    super(game, "Sandstone Oracle", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = SandstoneOracle;
