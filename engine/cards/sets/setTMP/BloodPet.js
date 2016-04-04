"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodPetBase = require("../set6ED/BloodPet.js");

class BloodPet extends BloodPetBase {
  constructor(game) {
    super(game, "Blood Pet", "Tempest", "TMP");
  }
}

module.exports = BloodPet;
