"use strict";
const Constants = require ("../../../Constants");
const ReflectingPoolBase = require("../setCNS/ReflectingPool");

class ReflectingPool extends ReflectingPoolBase {
  constructor (game) {
    super(game, "Reflecting Pool", "Shadowmoor", "SHM");
  }
}

module.exports = ReflectingPool;
