"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SentinelDispatch extends UnimplementedCard {
  constructor (game) {
    super(game, "Sentinel Dispatch", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SentinelDispatch;
