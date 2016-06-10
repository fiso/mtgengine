"use strict";
const Constants = require ("../../../Constants");
const BloodBairnBase = require("../setC15/BloodBairn");

class BloodBairn extends BloodBairnBase {
  constructor (game) {
    super(game, "Blood Bairn", "Magic 2014 Core Set", "M14");
  }
}

module.exports = BloodBairn;
