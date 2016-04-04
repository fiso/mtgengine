"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GryffVanguardBase = require("../setAVR/GryffVanguard.js");

class GryffVanguard extends GryffVanguardBase {
  constructor(game) {
    super(game, "Gryff Vanguard", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = GryffVanguard;
