"use strict";
const Constants = require ("../../../Constants");
const ExcludeBase = require("../setA25/Exclude");

class Exclude extends ExcludeBase {
  constructor (game) {
    super(game, "Exclude", "Magic Online Promos", "PRM");
  }
}

module.exports = Exclude;
