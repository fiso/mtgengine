"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NestingWurm extends Card {
  constructor(game) {
    super(game, "Nesting Wurm", "Nemesis", "NMS");
  }
}

module.exports = NestingWurm;
