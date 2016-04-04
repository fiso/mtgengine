"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TorchDrake extends Card {
  constructor(game) {
    super(game, "Torch Drake", "Guildpact", "GPT");
  }
}

module.exports = TorchDrake;
