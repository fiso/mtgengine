"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChainLightning extends UnimplementedCard {
  constructor (game) {
    super(game, "Chain Lightning", "Eternal Masters", "EMA");
  }
}

module.exports = ChainLightning;
