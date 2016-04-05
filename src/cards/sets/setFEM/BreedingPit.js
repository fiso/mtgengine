"use strict";
const Constants = require ("../../../Constants");
const BreedingPitBase = require("../setDD3_DVD/BreedingPit");

class BreedingPit extends BreedingPitBase {
  constructor(game) {
    super(game, "Breeding Pit", "Fallen Empires", "FEM");
  }
}

module.exports = BreedingPit;
