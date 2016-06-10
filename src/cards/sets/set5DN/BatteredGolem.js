"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BatteredGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Battered Golem", "Fifth Dawn", "5DN");
  }
}

module.exports = BatteredGolem;
