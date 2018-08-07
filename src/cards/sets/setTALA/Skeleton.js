"use strict";
const Constants = require ("../../../Constants");
const SkeletonBase = require("../setTA25/Skeleton");

class Skeleton extends SkeletonBase {
  constructor (game) {
    super(game, "Skeleton", "Shards of Alara Tokens", "TALA");
  }
}

module.exports = Skeleton;
