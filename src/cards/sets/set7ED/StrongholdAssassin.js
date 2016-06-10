"use strict";
const Constants = require ("../../../Constants");
const StrongholdAssassinBase = require("../setC13/StrongholdAssassin");

class StrongholdAssassin extends StrongholdAssassinBase {
  constructor (game) {
    super(game, "Stronghold Assassin", "Seventh Edition", "7ED");
  }
}

module.exports = StrongholdAssassin;
