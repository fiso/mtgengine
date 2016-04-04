"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WindingWurm extends Card {
  constructor(game) {
    super(game, "Winding Wurm", "Urza's Saga", "USG");
  }
}

module.exports = WindingWurm;
