"use strict";
const Constants = require ("../../../Constants");
const CabalTherapyBase = require("../setEMA/CabalTherapy");

class CabalTherapy extends CabalTherapyBase {
  constructor (game) {
    super(game, "Cabal Therapy", "Judgment", "JUD");
  }
}

module.exports = CabalTherapy;
