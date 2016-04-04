"use strict";
const Constants = require ("../../../Constants");
const ForkBase = require("../setCED/Fork");

class Fork extends ForkBase {
  constructor(game) {
    super(game, "Fork", "International Collector's Edition", "CEI");
  }
}

module.exports = Fork;
