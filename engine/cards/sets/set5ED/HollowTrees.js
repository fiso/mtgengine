"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HollowTreesBase = require("../setFEM/HollowTrees.js");

class HollowTrees extends HollowTreesBase {
  constructor(game) {
    super(game, "Hollow Trees", "Fifth Edition", "5ED");
  }
}

module.exports = HollowTrees;
