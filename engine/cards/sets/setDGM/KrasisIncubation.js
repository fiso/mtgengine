"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrasisIncubation extends Card {
  constructor(game) {
    super(game, "Krasis Incubation", "Dragon's Maze", "DGM");
  }
}

module.exports = KrasisIncubation;
