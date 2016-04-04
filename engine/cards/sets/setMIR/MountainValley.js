"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MountainValley extends UnimplementedCard {
  constructor(game) {
    super(game, "Mountain Valley", "Mirage", "MIR");
  }
}

module.exports = MountainValley;
