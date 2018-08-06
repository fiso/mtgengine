"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BraidsCabalMinion extends UnimplementedCard {
  constructor (game) {
    super(game, "Braids, Cabal Minion", "Eternal Masters", "EMA");
  }
}

module.exports = BraidsCabalMinion;
