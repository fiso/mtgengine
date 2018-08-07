"use strict";
const Constants = require ("../../../Constants");
const EndrekSahrMasterBreederBase = require("../setMM2/EndrekSahrMasterBreeder");

class EndrekSahrMasterBreeder extends EndrekSahrMasterBreederBase {
  constructor (game) {
    super(game, "Endrek Sahr, Master Breeder", "Time Spiral", "TSP");
  }
}

module.exports = EndrekSahrMasterBreeder;
