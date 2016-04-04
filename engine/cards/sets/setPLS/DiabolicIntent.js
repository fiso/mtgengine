"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiabolicIntent extends Card {
  constructor(game) {
    super(game, "Diabolic Intent", "Planeshift", "PLS");
  }
}

module.exports = DiabolicIntent;
