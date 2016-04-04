"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TirelessTracker extends Card {
  constructor(game) {
    super(game, "Tireless Tracker", "Shadows over Innistrad", "SOI");
  }
}

module.exports = TirelessTracker;
