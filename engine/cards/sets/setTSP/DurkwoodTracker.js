"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DurkwoodTracker extends Card {
  constructor(game) {
    super(game, "Durkwood Tracker", "Time Spiral", "TSP");
  }
}

module.exports = DurkwoodTracker;
