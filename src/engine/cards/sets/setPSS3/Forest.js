"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setC18/Forest");

class Forest extends ForestBase {
  constructor (game) {
    super(game, "Forest", "M19 Standard Showdown", "PSS3");
  }
}

module.exports = Forest;
