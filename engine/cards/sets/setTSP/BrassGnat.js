"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrassGnat extends Card {
  constructor(game) {
    super(game, "Brass Gnat", "Time Spiral", "TSP");
  }
}

module.exports = BrassGnat;
