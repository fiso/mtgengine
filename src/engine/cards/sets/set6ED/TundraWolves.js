"use strict";
const Constants = require ("../../../Constants");
const TundraWolvesBase = require("../set10E/TundraWolves");

class TundraWolves extends TundraWolvesBase {
  constructor (game) {
    super(game, "Tundra Wolves", "Classic Sixth Edition", "6ED");
  }
}

module.exports = TundraWolves;
