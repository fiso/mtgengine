"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhostsoftheDamned extends Card {
  constructor(game) {
    super(game, "Ghosts of the Damned", "Legends", "LEG");
  }
}

module.exports = GhostsoftheDamned;
