"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PollutedBonds extends UnimplementedCard {
  constructor(game) {
    super(game, "Polluted Bonds", "Shadowmoor", "SHM");
  }
}

module.exports = PollutedBonds;
