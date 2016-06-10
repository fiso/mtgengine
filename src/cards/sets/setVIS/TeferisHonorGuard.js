"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeferisHonorGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Teferi's Honor Guard", "Visions", "VIS");
  }
}

module.exports = TeferisHonorGuard;
