"use strict";
const Constants = require ("../../../Constants");
const IllusionaryWallBase = require("../setICE/IllusionaryWall");

class IllusionaryWall extends IllusionaryWallBase {
  constructor (game) {
    super(game, "Illusionary Wall", "Masters Edition", "MED");
  }
}

module.exports = IllusionaryWall;
