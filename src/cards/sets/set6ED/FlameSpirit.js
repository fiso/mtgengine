"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlameSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Flame Spirit", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FlameSpirit;
