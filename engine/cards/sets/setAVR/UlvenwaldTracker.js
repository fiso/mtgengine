"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UlvenwaldTracker extends Card {
  constructor(game) {
    super(game, "Ulvenwald Tracker", "Avacyn Restored", "AVR");
  }
}

module.exports = UlvenwaldTracker;
