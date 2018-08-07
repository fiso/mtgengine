"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaningWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Waning Wurm", "Planar Chaos", "PLC");
  }
}

module.exports = WaningWurm;
