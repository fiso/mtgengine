"use strict";
const Constants = require ("../../../Constants");
const OtherworldlyJourneyBase = require("../setCHK/OtherworldlyJourney");

class OtherworldlyJourney extends OtherworldlyJourneyBase {
  constructor(game) {
    super(game, "Otherworldly Journey", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = OtherworldlyJourney;
