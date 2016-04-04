"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SatyrHoplite extends UnimplementedCard {
  constructor(game) {
    super(game, "Satyr Hoplite", "Journey into Nyx", "JOU");
  }
}

module.exports = SatyrHoplite;
