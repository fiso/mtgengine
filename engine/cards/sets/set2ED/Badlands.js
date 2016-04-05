"use strict";
const Constants = require ("../../../Constants");
const BadlandsBase = require("../setCED/Badlands");

class Badlands extends BadlandsBase {
  constructor(game) {
    super(game, "Badlands", "Unlimited Edition", "2ED");
  }
}

module.exports = Badlands;
