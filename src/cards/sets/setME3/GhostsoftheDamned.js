"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostsoftheDamned extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghosts of the Damned", "Masters Edition III", "ME3");
  }
}

module.exports = GhostsoftheDamned;
