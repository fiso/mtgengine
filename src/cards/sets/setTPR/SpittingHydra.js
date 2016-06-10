"use strict";
const Constants = require ("../../../Constants");
const SpittingHydraBase = require("../setSTH/SpittingHydra");

class SpittingHydra extends SpittingHydraBase {
  constructor (game) {
    super(game, "Spitting Hydra", "Tempest Remastered", "TPR");
  }
}

module.exports = SpittingHydra;
