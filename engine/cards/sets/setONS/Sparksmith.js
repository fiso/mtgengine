"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SparksmithBase = require("../setpFNM/Sparksmith.js");

class Sparksmith extends SparksmithBase {
  constructor(game) {
    super(game, "Sparksmith", "Onslaught", "ONS");
  }
}

module.exports = Sparksmith;
