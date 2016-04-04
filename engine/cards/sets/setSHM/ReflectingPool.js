"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReflectingPoolBase = require("../setCNS/ReflectingPool.js");

class ReflectingPool extends ReflectingPoolBase {
  constructor(game) {
    super(game, "Reflecting Pool", "Shadowmoor", "SHM");
  }
}

module.exports = ReflectingPool;
