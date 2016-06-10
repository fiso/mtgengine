"use strict";
const Constants = require ("../../../Constants");
const RootwaterDepthsBase = require("../setTMP/RootwaterDepths");

class RootwaterDepths extends RootwaterDepthsBase {
  constructor (game) {
    super(game, "Rootwater Depths", "Tempest Remastered", "TPR");
  }
}

module.exports = RootwaterDepths;
