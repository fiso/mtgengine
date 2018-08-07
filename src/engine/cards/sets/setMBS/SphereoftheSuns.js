"use strict";
const Constants = require ("../../../Constants");
const SphereoftheSunsBase = require("../setMM2/SphereoftheSuns");

class SphereoftheSuns extends SphereoftheSunsBase {
  constructor (game) {
    super(game, "Sphere of the Suns", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SphereoftheSuns;
