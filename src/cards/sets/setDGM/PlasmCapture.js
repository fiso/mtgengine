"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlasmCapture extends UnimplementedCard {
  constructor (game) {
    super(game, "Plasm Capture", "Dragon's Maze", "DGM");
  }
}

module.exports = PlasmCapture;
