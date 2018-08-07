"use strict";
const Constants = require ("../../../Constants");
const AnnihilateBase = require("../setEMA/Annihilate");

class Annihilate extends AnnihilateBase {
  constructor (game) {
    super(game, "Annihilate", "Commander 2013", "C13");
  }
}

module.exports = Annihilate;
