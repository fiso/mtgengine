"use strict";
const Constants = require ("../../../Constants");
const IllusionaryWallBase = require("../setMED/IllusionaryWall");

class IllusionaryWall extends IllusionaryWallBase {
  constructor (game) {
    super(game, "Illusionary Wall", "Ice Age", "ICE");
  }
}

module.exports = IllusionaryWall;
