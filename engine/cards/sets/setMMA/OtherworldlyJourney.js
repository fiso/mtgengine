"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OtherworldlyJourneyBase = require("../setCHK/OtherworldlyJourney.js");

class OtherworldlyJourney extends OtherworldlyJourneyBase {
  constructor(game) {
    super(game, "Otherworldly Journey", "Modern Masters", "MMA");
  }
}

module.exports = OtherworldlyJourney;
