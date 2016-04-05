"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReliquaryMonk extends UnimplementedCard {
  constructor(game) {
    super(game, "Reliquary Monk", "Urza's Destiny", "UDS");
  }
}

module.exports = ReliquaryMonk;
