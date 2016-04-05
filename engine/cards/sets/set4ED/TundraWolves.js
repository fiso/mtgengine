"use strict";
const Constants = require ("../../../Constants");
const TundraWolvesBase = require("../set6ED/TundraWolves");

class TundraWolves extends TundraWolvesBase {
  constructor(game) {
    super(game, "Tundra Wolves", "Fourth Edition", "4ED");
  }
}

module.exports = TundraWolves;
