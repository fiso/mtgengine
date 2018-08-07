"use strict";
const Constants = require ("../../../Constants");
const BloodTributeBase = require("../setC17/BloodTribute");

class BloodTribute extends BloodTributeBase {
  constructor (game) {
    super(game, "Blood Tribute", "Zendikar", "ZEN");
  }
}

module.exports = BloodTribute;
