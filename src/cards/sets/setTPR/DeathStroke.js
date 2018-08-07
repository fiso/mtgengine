"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathStroke extends UnimplementedCard {
  constructor (game) {
    super(game, "Death Stroke", "Tempest Remastered", "TPR");
  }
}

module.exports = DeathStroke;
