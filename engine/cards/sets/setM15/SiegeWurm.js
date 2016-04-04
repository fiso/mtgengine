"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SiegeWurm extends Card {
  constructor(game) {
    super(game, "Siege Wurm", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SiegeWurm;
