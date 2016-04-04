"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilentArbiter extends Card {
  constructor(game) {
    super(game, "Silent Arbiter", "Fifth Dawn", "5DN");
  }
}

module.exports = SilentArbiter;
