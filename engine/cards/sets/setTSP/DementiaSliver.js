"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DementiaSliver extends Card {
  constructor(game) {
    super(game, "Dementia Sliver", "Time Spiral", "TSP");
  }
}

module.exports = DementiaSliver;
