"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoaringSlagwurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Roaring Slagwurm", "Darksteel", "DST");
  }
}

module.exports = RoaringSlagwurm;
