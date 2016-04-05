"use strict";
const Constants = require ("../../../Constants");
const TsunamiBase = require("../setCED/Tsunami");

class Tsunami extends TsunamiBase {
  constructor(game) {
    super(game, "Tsunami", "International Collector's Edition", "CEI");
  }
}

module.exports = Tsunami;
