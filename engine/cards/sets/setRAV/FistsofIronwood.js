"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FistsofIronwoodBase = require("../setCMD/FistsofIronwood.js");

class FistsofIronwood extends FistsofIronwoodBase {
  constructor(game) {
    super(game, "Fists of Ironwood", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FistsofIronwood;
