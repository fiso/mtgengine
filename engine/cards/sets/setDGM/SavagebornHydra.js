"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SavagebornHydra extends Card {
  constructor(game) {
    super(game, "Savageborn Hydra", "Dragon's Maze", "DGM");
  }
}

module.exports = SavagebornHydra;
