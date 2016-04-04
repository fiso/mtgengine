"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HollowTrees extends Card {
  constructor(game) {
    super(game, "Hollow Trees", "Fallen Empires", "FEM");
  }
}

module.exports = HollowTrees;
