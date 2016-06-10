"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpawningGrounds extends UnimplementedCard {
  constructor (game) {
    super(game, "Spawning Grounds", "Commander 2013 Edition", "C13");
  }
}

module.exports = SpawningGrounds;
