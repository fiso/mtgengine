"use strict";
const Constants = require ("../../../Constants");
const BloodCryptBase = require("../setEXP/BloodCrypt");

class BloodCrypt extends BloodCryptBase {
  constructor (game) {
    super(game, "Blood Crypt", "Dissension", "DIS");
  }
}

module.exports = BloodCrypt;
