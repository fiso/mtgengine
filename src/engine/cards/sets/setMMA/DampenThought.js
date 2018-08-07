"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DampenThought extends UnimplementedCard {
  constructor (game) {
    super(game, "Dampen Thought", "Modern Masters", "MMA");
  }
}

module.exports = DampenThought;
