"use strict";
const Constants = require ("../../../Constants");
const ReflectingPoolBase = require("../setCNS/ReflectingPool");

class ReflectingPool extends ReflectingPoolBase {
  constructor (game) {
    super(game, "Reflecting Pool", "Magic Online Promos", "PRM");
  }
}

module.exports = ReflectingPool;
