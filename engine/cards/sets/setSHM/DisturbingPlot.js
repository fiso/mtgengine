"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DisturbingPlot extends Card {
  constructor(game) {
    super(game, "Disturbing Plot", "Shadowmoor", "SHM");
  }
}

module.exports = DisturbingPlot;
