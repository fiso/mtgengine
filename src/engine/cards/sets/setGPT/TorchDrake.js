"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TorchDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Torch Drake", "Guildpact", "GPT");
  }
}

module.exports = TorchDrake;
