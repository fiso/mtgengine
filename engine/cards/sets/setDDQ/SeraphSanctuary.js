"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeraphSanctuaryBase = require("../setAVR/SeraphSanctuary.js");

class SeraphSanctuary extends SeraphSanctuaryBase {
  constructor(game) {
    super(game, "Seraph Sanctuary", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = SeraphSanctuary;
