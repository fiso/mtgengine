"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SquallLine extends Card {
  constructor(game) {
    super(game, "Squall Line", "Time Spiral", "TSP");
  }
}

module.exports = SquallLine;
