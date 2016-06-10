"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhalanxLeader extends UnimplementedCard {
  constructor (game) {
    super(game, "Phalanx Leader", "Magic Game Day", "pMGD");
  }
}

module.exports = PhalanxLeader;
