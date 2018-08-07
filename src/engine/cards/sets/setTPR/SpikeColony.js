"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpikeColony extends UnimplementedCard {
  constructor (game) {
    super(game, "Spike Colony", "Tempest Remastered", "TPR");
  }
}

module.exports = SpikeColony;
