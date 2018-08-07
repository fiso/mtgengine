"use strict";
const Constants = require ("../../../Constants");
const StasisBase = require("../setME4/Stasis");

class Stasis extends StasisBase {
  constructor (game) {
    super(game, "Stasis", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Stasis;
