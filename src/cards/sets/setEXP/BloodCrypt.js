"use strict";
const Constants = require ("../../../Constants");
const BloodCryptBase = require("../setDIS/BloodCrypt");

class BloodCrypt extends BloodCryptBase {
  constructor (game) {
    super(game, "Blood Crypt", "Zendikar Expedition", "EXP");
  }
}

module.exports = BloodCrypt;
