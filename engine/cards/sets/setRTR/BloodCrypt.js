"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodCryptBase = require("../setDIS/BloodCrypt.js");

class BloodCrypt extends BloodCryptBase {
  constructor(game) {
    super(game, "Blood Crypt", "Return to Ravnica", "RTR");
  }
}

module.exports = BloodCrypt;
