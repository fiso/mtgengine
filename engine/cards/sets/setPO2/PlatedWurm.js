"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlatedWurm extends Card {
  constructor(game) {
    super(game, "Plated Wurm", "Portal Second Age", "PO2");
  }
}

module.exports = PlatedWurm;
