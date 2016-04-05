"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindingWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Winding Wurm", "Urza's Saga", "USG");
  }
}

module.exports = WindingWurm;
