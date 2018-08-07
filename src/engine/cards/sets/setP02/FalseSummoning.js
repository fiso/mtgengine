"use strict";
const Constants = require ("../../../Constants");
const FalseSummoningBase = require("../setME4/FalseSummoning");

class FalseSummoning extends FalseSummoningBase {
  constructor (game) {
    super(game, "False Summoning", "Portal Second Age", "P02");
  }
}

module.exports = FalseSummoning;
