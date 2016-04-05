"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setATH/Forest");

class Forest extends ForestBase {
  constructor(game) {
    super(game, "Forest", "Fourth Edition", "4ED");
  }
}

module.exports = Forest;
