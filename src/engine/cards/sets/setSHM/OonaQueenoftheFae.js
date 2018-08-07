"use strict";
const Constants = require ("../../../Constants");
const OonaQueenoftheFaeBase = require("../setMMA/OonaQueenoftheFae");

class OonaQueenoftheFae extends OonaQueenoftheFaeBase {
  constructor (game) {
    super(game, "Oona, Queen of the Fae", "Shadowmoor", "SHM");
  }
}

module.exports = OonaQueenoftheFae;
