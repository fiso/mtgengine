"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Evangelize extends Card {
  constructor(game) {
    super(game, "Evangelize", "Time Spiral", "TSP");
  }
}

module.exports = Evangelize;
