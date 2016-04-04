"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VampiricSliver extends Card {
  constructor(game) {
    super(game, "Vampiric Sliver", "Time Spiral", "TSP");
  }
}

module.exports = VampiricSliver;
