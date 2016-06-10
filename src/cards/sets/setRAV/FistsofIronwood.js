"use strict";
const Constants = require ("../../../Constants");
const FistsofIronwoodBase = require("../setCMD/FistsofIronwood");

class FistsofIronwood extends FistsofIronwoodBase {
  constructor (game) {
    super(game, "Fists of Ironwood", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FistsofIronwood;
