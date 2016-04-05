"use strict";
const Constants = require ("../../../Constants");
const ScrublandBase = require("../setCED/Scrubland");

class Scrubland extends ScrublandBase {
  constructor(game) {
    super(game, "Scrubland", "International Collector's Edition", "CEI");
  }
}

module.exports = Scrubland;
