"use strict";
const Constants = require ("../../../Constants");
const ConservatorBase = require("../setCED/Conservator");

class Conservator extends ConservatorBase {
  constructor (game) {
    super(game, "Conservator", "International Collector's Edition", "CEI");
  }
}

module.exports = Conservator;
