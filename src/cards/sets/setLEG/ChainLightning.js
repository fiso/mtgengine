"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChainLightning extends UnimplementedCard {
  constructor (game) {
    super(game, "Chain Lightning", "Legends", "LEG");
  }
}

module.exports = ChainLightning;
