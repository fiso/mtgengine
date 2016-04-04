"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeadeyeNavigator extends Card {
  constructor(game) {
    super(game, "Deadeye Navigator", "Avacyn Restored", "AVR");
  }
}

module.exports = DeadeyeNavigator;
