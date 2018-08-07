"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoldnightCastigator extends UnimplementedCard {
  constructor (game) {
    super(game, "Goldnight Castigator", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GoldnightCastigator;
