"use strict";
const Constants = require ("../../../Constants");
const NobleHierarchBase = require("../setMM2/NobleHierarch");

class NobleHierarch extends NobleHierarchBase {
  constructor (game) {
    super(game, "Noble Hierarch", "Magic Online Promos", "PRM");
  }
}

module.exports = NobleHierarch;
