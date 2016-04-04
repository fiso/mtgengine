"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LavaSpike extends Card {
  constructor(game) {
    super(game, "Lava Spike", "Champions of Kamigawa", "CHK");
  }
}

module.exports = LavaSpike;
