"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShadowSliver extends Card {
  constructor(game) {
    super(game, "Shadow Sliver", "Time Spiral", "TSP");
  }
}

module.exports = ShadowSliver;
