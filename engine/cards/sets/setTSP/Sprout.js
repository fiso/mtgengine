"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sprout extends Card {
  constructor(game) {
    super(game, "Sprout", "Time Spiral", "TSP");
  }
}

module.exports = Sprout;
