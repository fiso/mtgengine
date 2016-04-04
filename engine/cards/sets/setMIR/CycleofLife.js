"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CycleofLife extends Card {
  constructor(game) {
    super(game, "Cycle of Life", "Mirage", "MIR");
  }
}

module.exports = CycleofLife;
