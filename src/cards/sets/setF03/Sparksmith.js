"use strict";
const Constants = require ("../../../Constants");
const SparksmithBase = require("../setWC03/Sparksmith");

class Sparksmith extends SparksmithBase {
  constructor (game) {
    super(game, "Sparksmith", "Friday Night Magic 2003", "F03");
  }
}

module.exports = Sparksmith;
