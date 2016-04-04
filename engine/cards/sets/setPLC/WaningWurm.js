"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WaningWurm extends Card {
  constructor(game) {
    super(game, "Waning Wurm", "Planar Chaos", "PLC");
  }
}

module.exports = WaningWurm;
