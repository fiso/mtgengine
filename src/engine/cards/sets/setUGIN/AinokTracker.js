"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AinokTracker extends UnimplementedCard {
  constructor (game) {
    super(game, "Ainok Tracker", "Ugin's Fate", "UGIN");
  }
}

module.exports = AinokTracker;
