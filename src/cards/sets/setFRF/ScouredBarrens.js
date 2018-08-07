"use strict";
const Constants = require ("../../../Constants");
const ScouredBarrensBase = require("../setC18/ScouredBarrens");

class ScouredBarrens extends ScouredBarrensBase {
  constructor (game) {
    super(game, "Scoured Barrens", "Fate Reforged", "FRF");
  }
}

module.exports = ScouredBarrens;
