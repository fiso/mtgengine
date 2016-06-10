"use strict";
const Constants = require ("../../../Constants");
const FearBase = require("../set6ED/Fear");

class Fear extends FearBase {
  constructor (game) {
    super(game, "Fear", "Fifth Edition", "5ED");
  }
}

module.exports = Fear;
