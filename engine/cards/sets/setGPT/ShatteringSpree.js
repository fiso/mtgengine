"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShatteringSpree extends UnimplementedCard {
  constructor(game) {
    super(game, "Shattering Spree", "Guildpact", "GPT");
  }
}

module.exports = ShatteringSpree;
