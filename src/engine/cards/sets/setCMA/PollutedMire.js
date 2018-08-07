"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PollutedMire extends UnimplementedCard {
  constructor (game) {
    super(game, "Polluted Mire", "Commander Anthology", "CMA");
  }
}

module.exports = PollutedMire;
