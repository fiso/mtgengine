"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarduWoeReaper extends UnimplementedCard {
  constructor (game) {
    super(game, "Mardu Woe-Reaper", "Fate Reforged", "FRF");
  }
}

module.exports = MarduWoeReaper;
