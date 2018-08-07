"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpikeHatcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Spike Hatcher", "Tempest Remastered", "TPR");
  }
}

module.exports = SpikeHatcher;
