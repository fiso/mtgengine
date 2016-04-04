"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OtherworldlyJourneyBase = require("../setCHK/OtherworldlyJourney.js");

class OtherworldlyJourney extends OtherworldlyJourneyBase {
  constructor(game) {
    super(game, "Otherworldly Journey", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = OtherworldlyJourney;
