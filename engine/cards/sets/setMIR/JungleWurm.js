"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JungleWurm extends Card {
  constructor(game) {
    super(game, "Jungle Wurm", "Mirage", "MIR");
  }
}

module.exports = JungleWurm;
