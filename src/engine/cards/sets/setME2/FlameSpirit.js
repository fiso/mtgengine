"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlameSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Flame Spirit", "Masters Edition II", "ME2");
  }
}

module.exports = FlameSpirit;
