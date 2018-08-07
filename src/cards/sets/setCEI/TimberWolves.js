"use strict";
const Constants = require ("../../../Constants");
const TimberWolvesBase = require("../set4ED/TimberWolves");

class TimberWolves extends TimberWolvesBase {
  constructor (game) {
    super(game, "Timber Wolves", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = TimberWolves;
