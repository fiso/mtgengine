"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VerdantEmbrace extends Card {
  constructor(game) {
    super(game, "Verdant Embrace", "Time Spiral", "TSP");
  }
}

module.exports = VerdantEmbrace;
