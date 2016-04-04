"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathsPresence extends Card {
  constructor(game) {
    super(game, "Death's Presence", "Return to Ravnica", "RTR");
  }
}

module.exports = DeathsPresence;
