"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StripBare extends UnimplementedCard {
  constructor(game) {
    super(game, "Strip Bare", "Shadowmoor", "SHM");
  }
}

module.exports = StripBare;
