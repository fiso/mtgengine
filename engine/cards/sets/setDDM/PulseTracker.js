"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PulseTracker extends UnimplementedCard {
  constructor(game) {
    super(game, "Pulse Tracker", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = PulseTracker;
