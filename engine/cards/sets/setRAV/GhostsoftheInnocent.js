"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhostsoftheInnocent extends Card {
  constructor(game) {
    super(game, "Ghosts of the Innocent", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GhostsoftheInnocent;
