"use strict";
const Constants = require ("../../../Constants");
const CastleBase = require("../set6ED/Castle");

class Castle extends CastleBase {
  constructor (game) {
    super(game, "Castle", "Collector's Edition", "CED");
  }
}

module.exports = Castle;
