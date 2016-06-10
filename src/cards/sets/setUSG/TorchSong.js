"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TorchSong extends UnimplementedCard {
  constructor (game) {
    super(game, "Torch Song", "Urza's Saga", "USG");
  }
}

module.exports = TorchSong;
