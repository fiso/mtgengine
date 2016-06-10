"use strict";
const Constants = require ("../../../Constants");
const GreedBase = require("../set6ED/Greed");

class Greed extends GreedBase {
  constructor (game) {
    super(game, "Greed", "Commander 2013 Edition", "C13");
  }
}

module.exports = Greed;
