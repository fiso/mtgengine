"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrenchWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Trench Wurm", "Invasion", "INV");
  }
}

module.exports = TrenchWurm;
