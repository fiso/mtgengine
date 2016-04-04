"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SubterraneanShambler extends Card {
  constructor(game) {
    super(game, "Subterranean Shambler", "Time Spiral", "TSP");
  }
}

module.exports = SubterraneanShambler;
