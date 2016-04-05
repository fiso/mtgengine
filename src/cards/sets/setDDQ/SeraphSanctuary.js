"use strict";
const Constants = require ("../../../Constants");
const SeraphSanctuaryBase = require("../setAVR/SeraphSanctuary");

class SeraphSanctuary extends SeraphSanctuaryBase {
  constructor(game) {
    super(game, "Seraph Sanctuary", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = SeraphSanctuary;
