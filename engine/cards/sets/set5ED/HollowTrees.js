"use strict";
const Constants = require ("../../../Constants");
const HollowTreesBase = require("../setFEM/HollowTrees");

class HollowTrees extends HollowTreesBase {
  constructor(game) {
    super(game, "Hollow Trees", "Fifth Edition", "5ED");
  }
}

module.exports = HollowTrees;
