"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerpentGeneratorBase = require("../setCHR/SerpentGenerator.js");

class SerpentGenerator extends SerpentGeneratorBase {
  constructor(game) {
    super(game, "Serpent Generator", "Fifth Edition", "5ED");
  }
}

module.exports = SerpentGenerator;
