"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadIronSledge extends UnimplementedCard {
  constructor(game) {
    super(game, "Dead-Iron Sledge", "Mirrodin", "MRD");
  }
}

module.exports = DeadIronSledge;
