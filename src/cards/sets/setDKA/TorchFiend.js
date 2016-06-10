"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TorchFiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Torch Fiend", "Dark Ascension", "DKA");
  }
}

module.exports = TorchFiend;
