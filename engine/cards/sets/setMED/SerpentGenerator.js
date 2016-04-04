"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerpentGeneratorBase = require("../setCHR/SerpentGenerator.js");

class SerpentGenerator extends SerpentGeneratorBase {
  constructor(game) {
    super(game, "Serpent Generator", "Masters Edition", "MED");
  }
}

module.exports = SerpentGenerator;
