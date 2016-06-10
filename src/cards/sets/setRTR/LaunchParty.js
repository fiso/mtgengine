"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LaunchParty extends UnimplementedCard {
  constructor (game) {
    super(game, "Launch Party", "Return to Ravnica", "RTR");
  }
}

module.exports = LaunchParty;
