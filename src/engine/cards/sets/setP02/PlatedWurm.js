"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlatedWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Plated Wurm", "Portal Second Age", "P02");
  }
}

module.exports = PlatedWurm;
