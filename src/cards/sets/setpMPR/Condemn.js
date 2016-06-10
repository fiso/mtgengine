"use strict";
const Constants = require ("../../../Constants");
const CondemnBase = require("../setC14/Condemn");

class Condemn extends CondemnBase {
  constructor (game) {
    super(game, "Condemn", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Condemn;
