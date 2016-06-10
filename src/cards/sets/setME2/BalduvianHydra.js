"use strict";
const Constants = require ("../../../Constants");
const BalduvianHydraBase = require("../setICE/BalduvianHydra");

class BalduvianHydra extends BalduvianHydraBase {
  constructor (game) {
    super(game, "Balduvian Hydra", "Masters Edition II", "ME2");
  }
}

module.exports = BalduvianHydra;
