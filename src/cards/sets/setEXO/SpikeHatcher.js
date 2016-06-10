"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpikeHatcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Spike Hatcher", "Exodus", "EXO");
  }
}

module.exports = SpikeHatcher;
