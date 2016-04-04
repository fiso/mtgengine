"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TsunamiBase = require("../setCED/Tsunami.js");

class Tsunami extends TsunamiBase {
  constructor(game) {
    super(game, "Tsunami", "International Collector's Edition", "CEI");
  }
}

module.exports = Tsunami;
