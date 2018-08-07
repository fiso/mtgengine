"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DurkwoodTracker extends UnimplementedCard {
  constructor (game) {
    super(game, "Durkwood Tracker", "Time Spiral", "TSP");
  }
}

module.exports = DurkwoodTracker;
