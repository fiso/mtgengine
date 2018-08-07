"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilentArbiter extends UnimplementedCard {
  constructor (game) {
    super(game, "Silent Arbiter", "Conspiracy", "CNS");
  }
}

module.exports = SilentArbiter;
