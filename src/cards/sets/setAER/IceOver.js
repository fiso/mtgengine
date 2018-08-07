"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IceOver extends UnimplementedCard {
  constructor (game) {
    super(game, "Ice Over", "Aether Revolt", "AER");
  }
}

module.exports = IceOver;
