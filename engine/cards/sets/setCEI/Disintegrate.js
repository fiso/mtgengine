"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DisintegrateBase = require("../setCED/Disintegrate.js");

class Disintegrate extends DisintegrateBase {
  constructor(game) {
    super(game, "Disintegrate", "International Collector's Edition", "CEI");
  }
}

module.exports = Disintegrate;
