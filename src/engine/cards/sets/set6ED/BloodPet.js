"use strict";
const Constants = require ("../../../Constants");
const BloodPetBase = require("../set7ED/BloodPet");

class BloodPet extends BloodPetBase {
  constructor (game) {
    super(game, "Blood Pet", "Classic Sixth Edition", "6ED");
  }
}

module.exports = BloodPet;
