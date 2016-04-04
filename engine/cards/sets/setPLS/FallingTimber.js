"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FallingTimber extends Card {
  constructor(game) {
    super(game, "Falling Timber", "Planeshift", "PLS");
  }
}

module.exports = FallingTimber;
