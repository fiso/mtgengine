"use strict";
const Constants = require ("../../../Constants");
const AnnihilateBase = require("../setC13/Annihilate");

class Annihilate extends AnnihilateBase {
  constructor (game) {
    super(game, "Annihilate", "Eternal Masters", "EMA");
  }
}

module.exports = Annihilate;
