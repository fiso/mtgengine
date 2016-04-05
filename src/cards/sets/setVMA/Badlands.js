"use strict";
const Constants = require ("../../../Constants");
const BadlandsBase = require("../setCED/Badlands");

class Badlands extends BadlandsBase {
  constructor(game) {
    super(game, "Badlands", "Vintage Masters", "VMA");
  }
}

module.exports = Badlands;
