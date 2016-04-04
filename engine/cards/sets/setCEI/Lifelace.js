"use strict";
const Constants = require ("../../../Constants");
const LifelaceBase = require("../setCED/Lifelace");

class Lifelace extends LifelaceBase {
  constructor(game) {
    super(game, "Lifelace", "International Collector's Edition", "CEI");
  }
}

module.exports = Lifelace;
