"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TorchSlinger extends Card {
  constructor(game) {
    super(game, "Torch Slinger", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = TorchSlinger;
