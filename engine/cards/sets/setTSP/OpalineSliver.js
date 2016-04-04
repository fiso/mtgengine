"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OpalineSliver extends Card {
  constructor(game) {
    super(game, "Opaline Sliver", "Time Spiral", "TSP");
  }
}

module.exports = OpalineSliver;
