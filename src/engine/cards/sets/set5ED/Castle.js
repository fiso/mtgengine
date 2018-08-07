"use strict";
const Constants = require ("../../../Constants");
const CastleBase = require("../set7ED/Castle");

class Castle extends CastleBase {
  constructor (game) {
    super(game, "Castle", "Fifth Edition", "5ED");
  }
}

module.exports = Castle;
