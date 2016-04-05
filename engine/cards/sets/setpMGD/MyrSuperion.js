"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrSuperion extends UnimplementedCard {
  constructor(game) {
    super(game, "Myr Superion", "Magic Game Day", "pMGD");
  }
}

module.exports = MyrSuperion;
