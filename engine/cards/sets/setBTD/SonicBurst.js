"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SonicBurst extends UnimplementedCard {
  constructor(game) {
    super(game, "Sonic Burst", "Beatdown Box Set", "BTD");
  }
}

module.exports = SonicBurst;
