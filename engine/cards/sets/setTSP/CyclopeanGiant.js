"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CyclopeanGiant extends Card {
  constructor(game) {
    super(game, "Cyclopean Giant", "Time Spiral", "TSP");
  }
}

module.exports = CyclopeanGiant;
