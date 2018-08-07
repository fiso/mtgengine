"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrownofConvergence extends UnimplementedCard {
  constructor (game) {
    super(game, "Crown of Convergence", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CrownofConvergence;
