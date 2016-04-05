"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WalkingDead extends UnimplementedCard {
  constructor(game) {
    super(game, "Walking Dead", "Legends", "LEG");
  }
}

module.exports = WalkingDead;
