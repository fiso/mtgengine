"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PouncingWurm extends Card {
  constructor(game) {
    super(game, "Pouncing Wurm", "Planar Chaos", "PLC");
  }
}

module.exports = PouncingWurm;
