"use strict";
const Constants = require ("../../../Constants");
const CondemnBase = require("../setC17/Condemn");

class Condemn extends CondemnBase {
  constructor (game) {
    super(game, "Condemn", "Magic Player Rewards 2007", "P07");
  }
}

module.exports = Condemn;
