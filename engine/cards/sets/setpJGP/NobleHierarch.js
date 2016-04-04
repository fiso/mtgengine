"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NobleHierarchBase = require("../setCON/NobleHierarch.js");

class NobleHierarch extends NobleHierarchBase {
  constructor(game) {
    super(game, "Noble Hierarch", "Judge Gift Program", "pJGP");
  }
}

module.exports = NobleHierarch;
