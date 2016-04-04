"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodBairnBase = require("../setC15/BloodBairn.js");

class BloodBairn extends BloodBairnBase {
  constructor(game) {
    super(game, "Blood Bairn", "Magic 2014 Core Set", "M14");
  }
}

module.exports = BloodBairn;
