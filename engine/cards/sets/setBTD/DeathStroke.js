"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathStroke extends UnimplementedCard {
  constructor(game) {
    super(game, "Death Stroke", "Beatdown Box Set", "BTD");
  }
}

module.exports = DeathStroke;
