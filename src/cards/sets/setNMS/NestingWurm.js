"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NestingWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Nesting Wurm", "Nemesis", "NMS");
  }
}

module.exports = NestingWurm;
