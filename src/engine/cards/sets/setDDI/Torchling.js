"use strict";
const Constants = require ("../../../Constants");
const TorchlingBase = require("../setE01/Torchling");

class Torchling extends TorchlingBase {
  constructor (game) {
    super(game, "Torchling", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = Torchling;
