"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlisteringBarrier extends UnimplementedCard {
  constructor(game) {
    super(game, "Blistering Barrier", "Mirage", "MIR");
  }
}

module.exports = BlisteringBarrier;
