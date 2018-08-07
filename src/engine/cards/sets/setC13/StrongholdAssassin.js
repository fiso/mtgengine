"use strict";
const Constants = require ("../../../Constants");
const StrongholdAssassinBase = require("../setTPR/StrongholdAssassin");

class StrongholdAssassin extends StrongholdAssassinBase {
  constructor (game) {
    super(game, "Stronghold Assassin", "Commander 2013", "C13");
  }
}

module.exports = StrongholdAssassin;
