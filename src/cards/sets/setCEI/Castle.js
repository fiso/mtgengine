"use strict";
const Constants = require ("../../../Constants");
const CastleBase = require("../set6ED/Castle");

class Castle extends CastleBase {
  constructor(game) {
    super(game, "Castle", "International Collector's Edition", "CEI");
  }
}

module.exports = Castle;
