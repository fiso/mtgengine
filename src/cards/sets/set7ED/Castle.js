"use strict";
const Constants = require ("../../../Constants");
const CastleBase = require("../set6ED/Castle");

class Castle extends CastleBase {
  constructor (game) {
    super(game, "Castle", "Seventh Edition", "7ED");
  }
}

module.exports = Castle;
