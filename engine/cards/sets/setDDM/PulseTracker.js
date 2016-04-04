"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PulseTracker extends Card {
  constructor(game) {
    super(game, "Pulse Tracker", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = PulseTracker;
