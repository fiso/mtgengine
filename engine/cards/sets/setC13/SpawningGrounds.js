"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpawningGrounds extends Card {
  constructor(game) {
    super(game, "Spawning Grounds", "Commander 2013 Edition", "C13");
  }
}

module.exports = SpawningGrounds;
