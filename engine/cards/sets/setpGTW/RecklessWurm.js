"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Reckless Wurm", "Gateway", "pGTW");
  }
}

module.exports = RecklessWurm;
