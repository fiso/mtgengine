"use strict";
const Constants = require ("../../../Constants");
const BadlandsBase = require("../setCED/Badlands");

class Badlands extends BadlandsBase {
  constructor (game) {
    super(game, "Badlands", "Masters Edition II", "ME2");
  }
}

module.exports = Badlands;
