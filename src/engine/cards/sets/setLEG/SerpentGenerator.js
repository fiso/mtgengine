"use strict";
const Constants = require ("../../../Constants");
const SerpentGeneratorBase = require("../setMED/SerpentGenerator");

class SerpentGenerator extends SerpentGeneratorBase {
  constructor (game) {
    super(game, "Serpent Generator", "Legends", "LEG");
  }
}

module.exports = SerpentGenerator;
