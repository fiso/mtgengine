"use strict";
const Constants = require ("../../../Constants");
const BloodPetBase = require("../set6ED/BloodPet");

class BloodPet extends BloodPetBase {
  constructor(game) {
    super(game, "Blood Pet", "Seventh Edition", "7ED");
  }
}

module.exports = BloodPet;
