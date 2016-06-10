"use strict";
const Constants = require ("../../../Constants");
const GreedBase = require("../set6ED/Greed");

class Greed extends GreedBase {
  constructor (game) {
    super(game, "Greed", "Fourth Edition", "4ED");
  }
}

module.exports = Greed;
