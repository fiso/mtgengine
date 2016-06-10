"use strict";
const Constants = require ("../../../Constants");
const TundraWolvesBase = require("../set6ED/TundraWolves");

class TundraWolves extends TundraWolvesBase {
  constructor (game) {
    super(game, "Tundra Wolves", "Fifth Edition", "5ED");
  }
}

module.exports = TundraWolves;
