"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MountainTitan extends Card {
  constructor(game) {
    super(game, "Mountain Titan", "Ice Age", "ICE");
  }
}

module.exports = MountainTitan;
