"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CogworkGrinder extends UnimplementedCard {
  constructor(game) {
    super(game, "Cogwork Grinder", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CogworkGrinder;
