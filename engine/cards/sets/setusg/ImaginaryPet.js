"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ImaginaryPetBase = require("../set9ED/ImaginaryPet.js");

class ImaginaryPet extends ImaginaryPetBase {
  constructor(game) {
    super(game, "Imaginary Pet", "Urza's Saga", "USG");
  }
}

module.exports = ImaginaryPet;
