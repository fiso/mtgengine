"use strict";
const Constants = require ("../../../Constants");
const OxidizeBase = require("../setDST/Oxidize");

class Oxidize extends OxidizeBase {
  constructor (game) {
    super(game, "Oxidize", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Oxidize;
