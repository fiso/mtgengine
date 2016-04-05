"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarpedPhysique extends UnimplementedCard {
  constructor(game) {
    super(game, "Warped Physique", "Dragon's Maze", "DGM");
  }
}

module.exports = WarpedPhysique;
