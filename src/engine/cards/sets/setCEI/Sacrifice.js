"use strict";
const Constants = require ("../../../Constants");
const SacrificeBase = require("../setSUM/Sacrifice");

class Sacrifice extends SacrificeBase {
  constructor (game) {
    super(game, "Sacrifice", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Sacrifice;
