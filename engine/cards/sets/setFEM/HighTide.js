"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HighTide extends Card {
  constructor(game) {
    super(game, "High Tide", "Fallen Empires", "FEM");
  }
}

module.exports = HighTide;
