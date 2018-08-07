"use strict";
const Constants = require ("../../../Constants");
const StasisBase = require("../setME4/Stasis");

class Stasis extends StasisBase {
  constructor (game) {
    super(game, "Stasis", "Collectors’ Edition", "CED");
  }
}

module.exports = Stasis;
