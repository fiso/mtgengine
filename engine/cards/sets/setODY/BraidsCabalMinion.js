"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BraidsCabalMinion extends Card {
  constructor(game) {
    super(game, "Braids, Cabal Minion", "Odyssey", "ODY");
  }
}

module.exports = BraidsCabalMinion;
