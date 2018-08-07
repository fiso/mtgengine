"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setC18/Forest");

class Forest extends ForestBase {
  constructor (game) {
    super(game, "Forest", "Magic Premiere Shop 2011", "PMPS11");
  }
}

module.exports = Forest;
