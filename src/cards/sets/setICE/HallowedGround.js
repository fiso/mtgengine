"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HallowedGround extends UnimplementedCard {
  constructor(game) {
    super(game, "Hallowed Ground", "Ice Age", "ICE");
  }
}

module.exports = HallowedGround;
