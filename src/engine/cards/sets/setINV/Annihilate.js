"use strict";
const Constants = require ("../../../Constants");
const AnnihilateBase = require("../setEMA/Annihilate");

class Annihilate extends AnnihilateBase {
  constructor (game) {
    super(game, "Annihilate", "Invasion", "INV");
  }
}

module.exports = Annihilate;
