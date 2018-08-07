"use strict";
const Constants = require ("../../../Constants");
const RootwaterDepthsBase = require("../setTPR/RootwaterDepths");

class RootwaterDepths extends RootwaterDepthsBase {
  constructor (game) {
    super(game, "Rootwater Depths", "Tempest", "TMP");
  }
}

module.exports = RootwaterDepths;
