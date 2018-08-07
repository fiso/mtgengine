"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurseofChains extends UnimplementedCard {
  constructor (game) {
    super(game, "Curse of Chains", "Shadowmoor", "SHM");
  }
}

module.exports = CurseofChains;
