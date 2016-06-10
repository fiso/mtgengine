"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PollutedDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Polluted Dead", "Avacyn Restored", "AVR");
  }
}

module.exports = PollutedDead;
