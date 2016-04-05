"use strict";
const Constants = require ("../../../Constants");
const GryffVanguardBase = require("../setAVR/GryffVanguard");

class GryffVanguard extends GryffVanguardBase {
  constructor(game) {
    super(game, "Gryff Vanguard", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = GryffVanguard;
