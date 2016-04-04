"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkitteringMonstrosity extends Card {
  constructor(game) {
    super(game, "Skittering Monstrosity", "Time Spiral", "TSP");
  }
}

module.exports = SkitteringMonstrosity;
