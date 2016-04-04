"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PollutedDead extends Card {
  constructor(game) {
    super(game, "Polluted Dead", "Avacyn Restored", "AVR");
  }
}

module.exports = PollutedDead;
