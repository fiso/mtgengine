"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnimateLand extends UnimplementedCard {
  constructor (game) {
    super(game, "Animate Land", "Nemesis", "NEM");
  }
}

module.exports = AnimateLand;
