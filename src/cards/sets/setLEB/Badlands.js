"use strict";
const Constants = require ("../../../Constants");
const BadlandsBase = require("../setCED/Badlands");

class Badlands extends BadlandsBase {
  constructor (game) {
    super(game, "Badlands", "Limited Edition Beta", "LEB");
  }
}

module.exports = Badlands;
