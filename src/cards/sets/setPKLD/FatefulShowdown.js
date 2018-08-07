"use strict";
const Constants = require ("../../../Constants");
const FatefulShowdownBase = require("../setKLD/FatefulShowdown");

class FatefulShowdown extends FatefulShowdownBase {
  constructor (game) {
    super(game, "Fateful Showdown", "Kaladesh Promos", "PKLD");
  }
}

module.exports = FatefulShowdown;
