"use strict";
const Constants = require ("../../../Constants");
const StuporBase = require("../setTSB/Stupor");

class Stupor extends StuporBase {
  constructor (game) {
    super(game, "Stupor", "World Championship Decks 1999", "WC99");
  }
}

module.exports = Stupor;
