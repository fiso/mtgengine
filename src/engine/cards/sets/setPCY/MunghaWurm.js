"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MunghaWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Mungha Wurm", "Prophecy", "PCY");
  }
}

module.exports = MunghaWurm;
