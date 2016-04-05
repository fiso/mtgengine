"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimicRagworm extends UnimplementedCard {
  constructor(game) {
    super(game, "Simic Ragworm", "Dissension", "DIS");
  }
}

module.exports = SimicRagworm;
