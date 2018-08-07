"use strict";
const Constants = require ("../../../Constants");
const BloodBairnBase = require("../setCMA/BloodBairn");

class BloodBairn extends BloodBairnBase {
  constructor (game) {
    super(game, "Blood Bairn", "Magic 2014", "M14");
  }
}

module.exports = BloodBairn;
