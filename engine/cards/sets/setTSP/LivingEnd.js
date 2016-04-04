"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LivingEnd extends Card {
  constructor(game) {
    super(game, "Living End", "Time Spiral", "TSP");
  }
}

module.exports = LivingEnd;
