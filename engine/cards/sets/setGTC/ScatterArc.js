"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScatterArc extends Card {
  constructor(game) {
    super(game, "Scatter Arc", "Gatecrash", "GTC");
  }
}

module.exports = ScatterArc;
