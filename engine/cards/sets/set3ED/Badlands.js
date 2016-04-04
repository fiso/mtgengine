"use strict";
const Constants = require ("../../../Constants");
const BadlandsBase = require("../setCED/Badlands");

class Badlands extends BadlandsBase {
  constructor(game) {
    super(game, "Badlands", "Revised Edition", "3ED");
  }
}

module.exports = Badlands;
