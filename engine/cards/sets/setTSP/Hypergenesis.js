"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hypergenesis extends Card {
  constructor(game) {
    super(game, "Hypergenesis", "Time Spiral", "TSP");
  }
}

module.exports = Hypergenesis;
