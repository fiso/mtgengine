"use strict";
const Constants = require ("../../../Constants");
const BloodCryptBase = require("../setEXP/BloodCrypt");

class BloodCrypt extends BloodCryptBase {
  constructor (game) {
    super(game, "Blood Crypt", "Return to Ravnica", "RTR");
  }
}

module.exports = BloodCrypt;
