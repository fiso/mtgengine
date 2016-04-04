"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScouredBarrens extends Card {
  constructor(game) {
    super(game, "Scoured Barrens", "Commander 2015", "C15");
  }
}

module.exports = ScouredBarrens;
