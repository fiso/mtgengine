"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UlvenwaldTracker extends UnimplementedCard {
  constructor (game) {
    super(game, "Ulvenwald Tracker", "Avacyn Restored", "AVR");
  }
}

module.exports = UlvenwaldTracker;
