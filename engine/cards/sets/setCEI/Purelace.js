"use strict";
const Constants = require ("../../../Constants");
const PurelaceBase = require("../setCED/Purelace");

class Purelace extends PurelaceBase {
  constructor(game) {
    super(game, "Purelace", "International Collector's Edition", "CEI");
  }
}

module.exports = Purelace;
