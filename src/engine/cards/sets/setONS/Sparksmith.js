"use strict";
const Constants = require ("../../../Constants");
const SparksmithBase = require("../setWC03/Sparksmith");

class Sparksmith extends SparksmithBase {
  constructor (game) {
    super(game, "Sparksmith", "Onslaught", "ONS");
  }
}

module.exports = Sparksmith;
