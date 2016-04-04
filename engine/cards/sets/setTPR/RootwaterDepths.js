"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RootwaterDepthsBase = require("../setTMP/RootwaterDepths.js");

class RootwaterDepths extends RootwaterDepthsBase {
  constructor(game) {
    super(game, "Rootwater Depths", "Tempest Remastered", "TPR");
  }
}

module.exports = RootwaterDepths;
