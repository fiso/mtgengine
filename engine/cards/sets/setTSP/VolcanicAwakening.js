"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolcanicAwakening extends Card {
  constructor(game) {
    super(game, "Volcanic Awakening", "Time Spiral", "TSP");
  }
}

module.exports = VolcanicAwakening;
