"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BatteringWurm extends Card {
  constructor(game) {
    super(game, "Battering Wurm", "Guildpact", "GPT");
  }
}

module.exports = BatteringWurm;
