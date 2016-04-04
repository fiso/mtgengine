"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EndrekSahrMasterBreederBase = require("../setC13/EndrekSahrMasterBreeder.js");

class EndrekSahrMasterBreeder extends EndrekSahrMasterBreederBase {
  constructor(game) {
    super(game, "Endrek Sahr, Master Breeder", "Time Spiral", "TSP");
  }
}

module.exports = EndrekSahrMasterBreeder;
