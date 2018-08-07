"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpittingHydra extends UnimplementedCard {
  constructor (game) {
    super(game, "Spitting Hydra", "Tempest Remastered", "TPR");
  }
}

module.exports = SpittingHydra;
