"use strict";
const Constants = require ("../../../Constants");
const BadlandsBase = require("../setCED/Badlands");

class Badlands extends BadlandsBase {
  constructor (game) {
    super(game, "Badlands", "Masters Edition IV", "ME4");
  }
}

module.exports = Badlands;
