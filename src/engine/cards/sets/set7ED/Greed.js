"use strict";
const Constants = require ("../../../Constants");
const GreedBase = require("../setC13/Greed");

class Greed extends GreedBase {
  constructor (game) {
    super(game, "Greed", "Seventh Edition", "7ED");
  }
}

module.exports = Greed;
