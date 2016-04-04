"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuraThief extends UnimplementedCard {
  constructor(game) {
    super(game, "Aura Thief", "Urza's Destiny", "UDS");
  }
}

module.exports = AuraThief;
