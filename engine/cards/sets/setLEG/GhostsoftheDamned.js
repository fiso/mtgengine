"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostsoftheDamned extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghosts of the Damned", "Legends", "LEG");
  }
}

module.exports = GhostsoftheDamned;
