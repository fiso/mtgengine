"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reiterate extends Card {
  constructor(game) {
    super(game, "Reiterate", "Time Spiral", "TSP");
  }
}

module.exports = Reiterate;
