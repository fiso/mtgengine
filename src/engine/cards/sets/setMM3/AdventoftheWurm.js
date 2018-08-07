"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdventoftheWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Advent of the Wurm", "Modern Masters 2017", "MM3");
  }
}

module.exports = AdventoftheWurm;
