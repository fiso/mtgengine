"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OonaQueenoftheFaeBase = require("../setV11/OonaQueenoftheFae.js");

class OonaQueenoftheFae extends OonaQueenoftheFaeBase {
  constructor(game) {
    super(game, "Oona, Queen of the Fae", "Shadowmoor", "SHM");
  }
}

module.exports = OonaQueenoftheFae;
