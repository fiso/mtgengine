"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EndlessWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Endless Wurm", "Urza's Saga", "USG");
  }
}

module.exports = EndlessWurm;
