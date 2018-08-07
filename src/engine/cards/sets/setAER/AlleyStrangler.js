"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlleyStrangler extends UnimplementedCard {
  constructor (game) {
    super(game, "Alley Strangler", "Aether Revolt", "AER");
  }
}

module.exports = AlleyStrangler;
