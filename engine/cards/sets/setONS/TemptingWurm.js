"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TemptingWurm extends Card {
  constructor(game) {
    super(game, "Tempting Wurm", "Onslaught", "ONS");
  }
}

module.exports = TemptingWurm;
