"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LaunchParty extends Card {
  constructor(game) {
    super(game, "Launch Party", "Return to Ravnica", "RTR");
  }
}

module.exports = LaunchParty;
