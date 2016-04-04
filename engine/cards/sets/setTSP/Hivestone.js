"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hivestone extends Card {
  constructor(game) {
    super(game, "Hivestone", "Time Spiral", "TSP");
  }
}

module.exports = Hivestone;
