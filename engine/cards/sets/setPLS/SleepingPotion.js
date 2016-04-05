"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SleepingPotion extends UnimplementedCard {
  constructor(game) {
    super(game, "Sleeping Potion", "Planeshift", "PLS");
  }
}

module.exports = SleepingPotion;
