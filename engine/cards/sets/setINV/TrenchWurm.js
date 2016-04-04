"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrenchWurm extends Card {
  constructor(game) {
    super(game, "Trench Wurm", "Invasion", "INV");
  }
}

module.exports = TrenchWurm;
