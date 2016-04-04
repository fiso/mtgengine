"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NobleHierarchBase = require("../setCON/NobleHierarch.js");

class NobleHierarch extends NobleHierarchBase {
  constructor(game) {
    super(game, "Noble Hierarch", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = NobleHierarch;
