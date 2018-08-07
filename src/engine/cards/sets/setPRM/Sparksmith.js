"use strict";
const Constants = require ("../../../Constants");
const SparksmithBase = require("../setWC03/Sparksmith");

class Sparksmith extends SparksmithBase {
  constructor (game) {
    super(game, "Sparksmith", "Magic Online Promos", "PRM");
  }
}

module.exports = Sparksmith;
