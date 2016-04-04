"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShimmeringWings extends Card {
  constructor(game) {
    super(game, "Shimmering Wings", "Invasion", "INV");
  }
}

module.exports = ShimmeringWings;
