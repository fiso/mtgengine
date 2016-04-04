"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Moonlace extends Card {
  constructor(game) {
    super(game, "Moonlace", "Time Spiral", "TSP");
  }
}

module.exports = Moonlace;
