"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnlistedWurm extends Card {
  constructor(game) {
    super(game, "Enlisted Wurm", "Alara Reborn", "ARB");
  }
}

module.exports = EnlistedWurm;
