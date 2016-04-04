"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TwoHeadedSliver extends Card {
  constructor(game) {
    super(game, "Two-Headed Sliver", "Time Spiral", "TSP");
  }
}

module.exports = TwoHeadedSliver;
