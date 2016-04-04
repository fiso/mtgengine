"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GobblingOoze extends Card {
  constructor(game) {
    super(game, "Gobbling Ooze", "Return to Ravnica", "RTR");
  }
}

module.exports = GobblingOoze;
