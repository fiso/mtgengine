"use strict";
const Constants = require ("../../../Constants");
const SkeletonizeBase = require("../setA25/Skeletonize");

class Skeletonize extends SkeletonizeBase {
  constructor (game) {
    super(game, "Skeletonize", "Shards of Alara", "ALA");
  }
}

module.exports = Skeletonize;
