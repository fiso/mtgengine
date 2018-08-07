"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuilledSlagwurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Quilled Slagwurm", "Mirrodin Besieged", "MBS");
  }
}

module.exports = QuilledSlagwurm;
