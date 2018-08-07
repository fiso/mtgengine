"use strict";
const Constants = require ("../../../Constants");
const AnnihilateBase = require("../setEMA/Annihilate");

class Annihilate extends AnnihilateBase {
  constructor (game) {
    super(game, "Annihilate", "Commander 2014", "C14");
  }
}

module.exports = Annihilate;
