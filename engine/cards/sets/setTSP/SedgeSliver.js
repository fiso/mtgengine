"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SedgeSliver extends Card {
  constructor(game) {
    super(game, "Sedge Sliver", "Time Spiral", "TSP");
  }
}

module.exports = SedgeSliver;
