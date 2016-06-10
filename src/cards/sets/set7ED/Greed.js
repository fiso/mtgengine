"use strict";
const Constants = require ("../../../Constants");
const GreedBase = require("../set6ED/Greed");

class Greed extends GreedBase {
  constructor (game) {
    super(game, "Greed", "Seventh Edition", "7ED");
  }
}

module.exports = Greed;
