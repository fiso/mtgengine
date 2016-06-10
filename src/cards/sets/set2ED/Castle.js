"use strict";
const Constants = require ("../../../Constants");
const CastleBase = require("../set6ED/Castle");

class Castle extends CastleBase {
  constructor (game) {
    super(game, "Castle", "Unlimited Edition", "2ED");
  }
}

module.exports = Castle;
