"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarduWoeReaper extends Card {
  constructor(game) {
    super(game, "Mardu Woe-Reaper", "Fate Reforged", "FRF");
  }
}

module.exports = MarduWoeReaper;
