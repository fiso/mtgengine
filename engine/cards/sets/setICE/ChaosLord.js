"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChaosLord extends Card {
  constructor(game) {
    super(game, "Chaos Lord", "Ice Age", "ICE");
  }
}

module.exports = ChaosLord;
