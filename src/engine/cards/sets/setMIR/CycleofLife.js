"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CycleofLife extends UnimplementedCard {
  constructor (game) {
    super(game, "Cycle of Life", "Mirage", "MIR");
  }
}

module.exports = CycleofLife;
