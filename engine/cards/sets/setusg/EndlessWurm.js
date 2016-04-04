"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EndlessWurm extends Card {
  constructor(game) {
    super(game, "Endless Wurm", "Urza's Saga", "USG");
  }
}

module.exports = EndlessWurm;
