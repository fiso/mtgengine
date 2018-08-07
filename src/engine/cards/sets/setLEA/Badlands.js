"use strict";
const Constants = require ("../../../Constants");
const BadlandsBase = require("../setVMA/Badlands");

class Badlands extends BadlandsBase {
  constructor (game) {
    super(game, "Badlands", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Badlands;
