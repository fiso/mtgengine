"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherSting extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Sting", "Urza's Destiny", "UDS");
  }
}

module.exports = AetherSting;
