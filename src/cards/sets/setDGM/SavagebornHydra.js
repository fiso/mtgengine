"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavagebornHydra extends UnimplementedCard {
  constructor(game) {
    super(game, "Savageborn Hydra", "Dragon's Maze", "DGM");
  }
}

module.exports = SavagebornHydra;
