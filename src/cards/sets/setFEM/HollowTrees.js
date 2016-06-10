"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HollowTrees extends UnimplementedCard {
  constructor (game) {
    super(game, "Hollow Trees", "Fallen Empires", "FEM");
  }
}

module.exports = HollowTrees;
