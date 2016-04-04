"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindlashSliver extends Card {
  constructor(game) {
    super(game, "Mindlash Sliver", "Time Spiral", "TSP");
  }
}

module.exports = MindlashSliver;
