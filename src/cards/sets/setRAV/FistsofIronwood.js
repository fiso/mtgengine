"use strict";
const Constants = require ("../../../Constants");
const FistsofIronwoodBase = require("../setMM3/FistsofIronwood");

class FistsofIronwood extends FistsofIronwoodBase {
  constructor (game) {
    super(game, "Fists of Ironwood", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FistsofIronwood;
