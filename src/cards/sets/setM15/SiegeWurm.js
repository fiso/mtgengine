"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SiegeWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Siege Wurm", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SiegeWurm;
