"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Molder extends Card {
  constructor(game) {
    super(game, "Molder", "Time Spiral", "TSP");
  }
}

module.exports = Molder;
