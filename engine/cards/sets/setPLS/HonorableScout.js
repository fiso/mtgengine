"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HonorableScout extends Card {
  constructor(game) {
    super(game, "Honorable Scout", "Planeshift", "PLS");
  }
}

module.exports = HonorableScout;
