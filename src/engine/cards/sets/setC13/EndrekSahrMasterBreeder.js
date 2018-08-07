"use strict";
const Constants = require ("../../../Constants");
const EndrekSahrMasterBreederBase = require("../setMM2/EndrekSahrMasterBreeder");

class EndrekSahrMasterBreeder extends EndrekSahrMasterBreederBase {
  constructor (game) {
    super(game, "Endrek Sahr, Master Breeder", "Commander 2013", "C13");
  }
}

module.exports = EndrekSahrMasterBreeder;
