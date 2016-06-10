"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EngulfingSlagwurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Engulfing Slagwurm", "Scars of Mirrodin", "SOM");
  }
}

module.exports = EngulfingSlagwurm;
