"use strict";
const Constants = require ("../../../Constants");
const CurseoftheNightlyHuntBase = require("../setCM2/CurseoftheNightlyHunt");

class CurseoftheNightlyHunt extends CurseoftheNightlyHuntBase {
  constructor (game) {
    super(game, "Curse of the Nightly Hunt", "Commander 2015", "C15");
  }
}

module.exports = CurseoftheNightlyHunt;
