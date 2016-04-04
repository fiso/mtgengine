"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpittingHydraBase = require("../setSTH/SpittingHydra.js");

class SpittingHydra extends SpittingHydraBase {
  constructor(game) {
    super(game, "Spitting Hydra", "Tempest Remastered", "TPR");
  }
}

module.exports = SpittingHydra;
