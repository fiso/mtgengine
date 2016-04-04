"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ResilientWanderer extends Card {
  constructor(game) {
    super(game, "Resilient Wanderer", "Odyssey", "ODY");
  }
}

module.exports = ResilientWanderer;
