"use strict";
const Constants = require ("../../../Constants");
const BadlandsBase = require("../setVMA/Badlands");

class Badlands extends BadlandsBase {
  constructor (game) {
    super(game, "Badlands", "Magic Online Promos", "PRM");
  }
}

module.exports = Badlands;
