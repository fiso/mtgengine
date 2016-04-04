"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Plunder extends Card {
  constructor(game) {
    super(game, "Plunder", "Time Spiral", "TSP");
  }
}

module.exports = Plunder;
