"use strict";
const Constants = require ("../../../Constants");
const CabalTherapyBase = require("../setEMA/CabalTherapy");

class CabalTherapy extends CabalTherapyBase {
  constructor (game) {
    super(game, "Cabal Therapy", "Friday Night Magic 2005", "F05");
  }
}

module.exports = CabalTherapy;
