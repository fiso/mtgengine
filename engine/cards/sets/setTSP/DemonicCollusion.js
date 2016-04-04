"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DemonicCollusion extends Card {
  constructor(game) {
    super(game, "Demonic Collusion", "Time Spiral", "TSP");
  }
}

module.exports = DemonicCollusion;
