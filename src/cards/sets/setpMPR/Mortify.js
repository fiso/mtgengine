"use strict";
const Constants = require ("../../../Constants");
const MortifyBase = require("../setDDK/Mortify");

class Mortify extends MortifyBase {
  constructor(game) {
    super(game, "Mortify", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Mortify;
