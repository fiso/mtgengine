"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TorchSong extends Card {
  constructor(game) {
    super(game, "Torch Song", "Urza's Saga", "USG");
  }
}

module.exports = TorchSong;
