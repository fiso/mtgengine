"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulFoundry extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul Foundry", "Mirrodin", "MRD");
  }
}

module.exports = SoulFoundry;
