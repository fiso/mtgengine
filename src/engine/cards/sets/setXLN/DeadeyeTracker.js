"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadeyeTracker extends UnimplementedCard {
  constructor (game) {
    super(game, "Deadeye Tracker", "Ixalan", "XLN");
  }
}

module.exports = DeadeyeTracker;
