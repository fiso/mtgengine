"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArrogantWurm extends Card {
  constructor(game) {
    super(game, "Arrogant Wurm", "Friday Night Magic", "pFNM");
  }
}

module.exports = ArrogantWurm;
