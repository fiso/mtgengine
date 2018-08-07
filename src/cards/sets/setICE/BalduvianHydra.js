"use strict";
const Constants = require ("../../../Constants");
const BalduvianHydraBase = require("../setME2/BalduvianHydra");

class BalduvianHydra extends BalduvianHydraBase {
  constructor (game) {
    super(game, "Balduvian Hydra", "Ice Age", "ICE");
  }
}

module.exports = BalduvianHydra;
