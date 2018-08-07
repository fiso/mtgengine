"use strict";
const Constants = require ("../../../Constants");
const BraidsCabalMinionBase = require("../setEMA/BraidsCabalMinion");

class BraidsCabalMinion extends BraidsCabalMinionBase {
  constructor (game) {
    super(game, "Braids, Cabal Minion", "Odyssey", "ODY");
  }
}

module.exports = BraidsCabalMinion;
