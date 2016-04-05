"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MountainTitan extends UnimplementedCard {
  constructor(game) {
    super(game, "Mountain Titan", "Ice Age", "ICE");
  }
}

module.exports = MountainTitan;
