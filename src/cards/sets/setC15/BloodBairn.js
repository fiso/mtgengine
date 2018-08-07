"use strict";
const Constants = require ("../../../Constants");
const BloodBairnBase = require("../setCMA/BloodBairn");

class BloodBairn extends BloodBairnBase {
  constructor (game) {
    super(game, "Blood Bairn", "Commander 2015", "C15");
  }
}

module.exports = BloodBairn;
