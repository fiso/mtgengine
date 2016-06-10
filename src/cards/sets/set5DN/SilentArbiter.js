"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilentArbiter extends UnimplementedCard {
  constructor (game) {
    super(game, "Silent Arbiter", "Fifth Dawn", "5DN");
  }
}

module.exports = SilentArbiter;
