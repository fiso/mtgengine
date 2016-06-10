"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantomWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantom Wurm", "Time Spiral", "TSP");
  }
}

module.exports = PhantomWurm;
