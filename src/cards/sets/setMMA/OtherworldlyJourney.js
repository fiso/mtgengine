"use strict";
const Constants = require ("../../../Constants");
const OtherworldlyJourneyBase = require("../setCHK/OtherworldlyJourney");

class OtherworldlyJourney extends OtherworldlyJourneyBase {
  constructor (game) {
    super(game, "Otherworldly Journey", "Modern Masters", "MMA");
  }
}

module.exports = OtherworldlyJourney;
