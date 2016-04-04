"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpireMonitor extends Card {
  constructor(game) {
    super(game, "Spire Monitor", "New Phyrexia", "NPH");
  }
}

module.exports = SpireMonitor;
