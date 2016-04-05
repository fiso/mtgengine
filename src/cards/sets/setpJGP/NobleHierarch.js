"use strict";
const Constants = require ("../../../Constants");
const NobleHierarchBase = require("../setCON/NobleHierarch");

class NobleHierarch extends NobleHierarchBase {
  constructor(game) {
    super(game, "Noble Hierarch", "Judge Gift Program", "pJGP");
  }
}

module.exports = NobleHierarch;
