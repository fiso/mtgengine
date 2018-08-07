"use strict";
const Constants = require ("../../../Constants");
const MastermindsAcquisitionBase = require("../setPRIX/MastermindsAcquisition");

class MastermindsAcquisition extends MastermindsAcquisitionBase {
  constructor (game) {
    super(game, "Mastermind's Acquisition", "Rivals of Ixalan", "RIX");
  }
}

module.exports = MastermindsAcquisition;
