"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IllusionaryWallBase = require("../setICE/IllusionaryWall.js");

class IllusionaryWall extends IllusionaryWallBase {
  constructor(game) {
    super(game, "Illusionary Wall", "Masters Edition", "MED");
  }
}

module.exports = IllusionaryWall;
