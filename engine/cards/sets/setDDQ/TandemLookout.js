"use strict";
const Constants = require ("../../../Constants");
const TandemLookoutBase = require("../setAVR/TandemLookout");

class TandemLookout extends TandemLookoutBase {
  constructor(game) {
    super(game, "Tandem Lookout", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = TandemLookout;
