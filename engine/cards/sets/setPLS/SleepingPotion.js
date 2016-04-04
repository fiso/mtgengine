"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SleepingPotion extends Card {
  constructor(game) {
    super(game, "Sleeping Potion", "Planeshift", "PLS");
  }
}

module.exports = SleepingPotion;
