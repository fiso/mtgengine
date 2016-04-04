"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BasalSliver extends Card {
  constructor(game) {
    super(game, "Basal Sliver", "Time Spiral", "TSP");
  }
}

module.exports = BasalSliver;
