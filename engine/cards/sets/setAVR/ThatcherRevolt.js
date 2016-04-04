"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThatcherRevolt extends Card {
  constructor(game) {
    super(game, "Thatcher Revolt", "Avacyn Restored", "AVR");
  }
}

module.exports = ThatcherRevolt;
