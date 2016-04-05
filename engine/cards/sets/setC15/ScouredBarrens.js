"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScouredBarrens extends UnimplementedCard {
  constructor(game) {
    super(game, "Scoured Barrens", "Commander 2015", "C15");
  }
}

module.exports = ScouredBarrens;
