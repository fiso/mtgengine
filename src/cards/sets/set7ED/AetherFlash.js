"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherFlash extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Flash", "Seventh Edition", "7ED");
  }
}

module.exports = AetherFlash;
