"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PollutedDelta extends UnimplementedCard {
  constructor (game) {
    super(game, "Polluted Delta", "Zendikar Expeditions", "EXP");
  }
}

module.exports = PollutedDelta;
