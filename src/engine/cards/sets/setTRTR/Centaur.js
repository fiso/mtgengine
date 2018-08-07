"use strict";
const Constants = require ("../../../Constants");
const CentaurBase = require("../setTMM3/Centaur");

class Centaur extends CentaurBase {
  constructor (game) {
    super(game, "Centaur", "Return to Ravnica Tokens", "TRTR");
  }
}

module.exports = Centaur;
