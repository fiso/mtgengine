"use strict";
const Constants = require ("../../../Constants");
const OtherworldlyJourneyBase = require("../setMM2/OtherworldlyJourney");

class OtherworldlyJourney extends OtherworldlyJourneyBase {
  constructor (game) {
    super(game, "Otherworldly Journey", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = OtherworldlyJourney;
