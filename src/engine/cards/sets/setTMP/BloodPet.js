"use strict";
const Constants = require ("../../../Constants");
const BloodPetBase = require("../set7ED/BloodPet");

class BloodPet extends BloodPetBase {
  constructor (game) {
    super(game, "Blood Pet", "Tempest", "TMP");
  }
}

module.exports = BloodPet;
