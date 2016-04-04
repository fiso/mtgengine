"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScorchingWinds extends Card {
  constructor(game) {
    super(game, "Scorching Winds", "Portal", "POR");
  }
}

module.exports = ScorchingWinds;
