"use strict";
const Constants = require ("../../../Constants");
const TundraWolvesBase = require("../set10E/TundraWolves");

class TundraWolves extends TundraWolvesBase {
  constructor (game) {
    super(game, "Tundra Wolves", "Eighth Edition", "8ED");
  }
}

module.exports = TundraWolves;
