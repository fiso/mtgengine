"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TorchGauntlet extends UnimplementedCard {
  constructor (game) {
    super(game, "Torch Gauntlet", "Kaladesh", "KLD");
  }
}

module.exports = TorchGauntlet;
