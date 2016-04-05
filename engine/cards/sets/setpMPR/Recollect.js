"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Recollect extends UnimplementedCard {
  constructor(game) {
    super(game, "Recollect", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Recollect;
