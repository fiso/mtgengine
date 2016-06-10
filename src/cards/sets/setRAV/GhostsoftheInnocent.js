"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostsoftheInnocent extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghosts of the Innocent", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GhostsoftheInnocent;
