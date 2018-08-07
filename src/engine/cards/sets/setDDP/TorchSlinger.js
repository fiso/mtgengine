"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TorchSlinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Torch Slinger", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = TorchSlinger;
