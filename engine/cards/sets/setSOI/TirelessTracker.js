"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TirelessTracker extends UnimplementedCard {
  constructor(game) {
    super(game, "Tireless Tracker", "Shadows over Innistrad", "SOI");
  }
}

module.exports = TirelessTracker;
