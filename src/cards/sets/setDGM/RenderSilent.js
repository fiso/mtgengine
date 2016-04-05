"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RenderSilent extends UnimplementedCard {
  constructor(game) {
    super(game, "Render Silent", "Dragon's Maze", "DGM");
  }
}

module.exports = RenderSilent;
