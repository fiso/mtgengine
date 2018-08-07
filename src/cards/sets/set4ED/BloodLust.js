"use strict";
const Constants = require ("../../../Constants");
const BloodLustBase = require("../setME3/BloodLust");

class BloodLust extends BloodLustBase {
  constructor (game) {
    super(game, "Blood Lust", "Fourth Edition", "4ED");
  }
}

module.exports = BloodLust;
