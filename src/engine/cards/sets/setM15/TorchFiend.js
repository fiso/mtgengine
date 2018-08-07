"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TorchFiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Torch Fiend", "Magic 2015", "M15");
  }
}

module.exports = TorchFiend;
