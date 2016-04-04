"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MassacreWurm extends Card {
  constructor(game) {
    super(game, "Massacre Wurm", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MassacreWurm;
