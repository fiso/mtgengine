"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScaledWurm extends Card {
  constructor(game) {
    super(game, "Scaled Wurm", "Battle Royale Box Set", "BRB");
  }
}

module.exports = ScaledWurm;
