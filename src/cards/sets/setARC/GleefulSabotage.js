"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GleefulSabotage extends UnimplementedCard {
  constructor(game) {
    super(game, "Gleeful Sabotage", "Archenemy", "ARC");
  }
}

module.exports = GleefulSabotage;
