"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScouredBarrensBase = require("../setC15/ScouredBarrens.js");

class ScouredBarrens extends ScouredBarrensBase {
  constructor(game) {
    super(game, "Scoured Barrens", "Fate Reforged", "FRF");
  }
}

module.exports = ScouredBarrens;
