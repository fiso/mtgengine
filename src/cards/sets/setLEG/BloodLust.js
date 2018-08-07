"use strict";
const Constants = require ("../../../Constants");
const BloodLustBase = require("../setME3/BloodLust");

class BloodLust extends BloodLustBase {
  constructor (game) {
    super(game, "Blood Lust", "Legends", "LEG");
  }
}

module.exports = BloodLust;
