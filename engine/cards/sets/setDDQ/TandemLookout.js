"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TandemLookoutBase = require("../setAVR/TandemLookout.js");

class TandemLookout extends TandemLookoutBase {
  constructor(game) {
    super(game, "Tandem Lookout", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = TandemLookout;
