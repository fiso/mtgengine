"use strict";
const Constants = require ("../../../Constants");
const TimetwisterBase = require("../setCED/Timetwister");

class Timetwister extends TimetwisterBase {
  constructor(game) {
    super(game, "Timetwister", "International Collector's Edition", "CEI");
  }
}

module.exports = Timetwister;
