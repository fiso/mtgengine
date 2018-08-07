"use strict";
const Constants = require ("../../../Constants");
const CentaurBase = require("../setTMM3/Centaur");

class Centaur extends CentaurBase {
  constructor (game) {
    super(game, "Centaur", "Born of the Gods Tokens", "TBNG");
  }
}

module.exports = Centaur;
