"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarpedPhysique extends Card {
  constructor(game) {
    super(game, "Warped Physique", "Dragon's Maze", "DGM");
  }
}

module.exports = WarpedPhysique;
