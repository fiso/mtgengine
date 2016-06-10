"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlameJet extends UnimplementedCard {
  constructor (game) {
    super(game, "Flame Jet", "Urza's Destiny", "UDS");
  }
}

module.exports = FlameJet;
