"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MassacreWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Massacre Wurm", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MassacreWurm;
