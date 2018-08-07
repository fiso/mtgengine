"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpikeBreeder extends UnimplementedCard {
  constructor (game) {
    super(game, "Spike Breeder", "Tempest Remastered", "TPR");
  }
}

module.exports = SpikeBreeder;
