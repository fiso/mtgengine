"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SarkhansTriumph extends UnimplementedCard {
  constructor (game) {
    super(game, "Sarkhan's Triumph", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SarkhansTriumph;
