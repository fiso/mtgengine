"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Conflagrate extends Card {
  constructor(game) {
    super(game, "Conflagrate", "Time Spiral", "TSP");
  }
}

module.exports = Conflagrate;
