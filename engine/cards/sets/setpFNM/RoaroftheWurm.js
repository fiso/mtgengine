"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoaroftheWurm extends Card {
  constructor(game) {
    super(game, "Roar of the Wurm", "Friday Night Magic", "pFNM");
  }
}

module.exports = RoaroftheWurm;
