"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TruthorTale extends Card {
  constructor(game) {
    super(game, "Truth or Tale", "Time Spiral", "TSP");
  }
}

module.exports = TruthorTale;
