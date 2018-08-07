"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SentinelDispatch extends UnimplementedCard {
  constructor (game) {
    super(game, "Sentinel Dispatch", "Conspiracy", "CNS");
  }
}

module.exports = SentinelDispatch;
