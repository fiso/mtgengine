"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LaunchtheFleet extends Card {
  constructor(game) {
    super(game, "Launch the Fleet", "Journey into Nyx", "JOU");
  }
}

module.exports = LaunchtheFleet;
