"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellBurst extends UnimplementedCard {
  constructor(game) {
    super(game, "Spell Burst", "Time Spiral", "TSP");
  }
}

module.exports = SpellBurst;
