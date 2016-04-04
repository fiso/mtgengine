"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RenderSilent extends Card {
  constructor(game) {
    super(game, "Render Silent", "Dragon's Maze", "DGM");
  }
}

module.exports = RenderSilent;
