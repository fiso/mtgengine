"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlasmCapture extends Card {
  constructor(game) {
    super(game, "Plasm Capture", "Dragon's Maze", "DGM");
  }
}

module.exports = PlasmCapture;
