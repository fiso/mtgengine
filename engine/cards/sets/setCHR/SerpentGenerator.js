"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SerpentGenerator extends Card {
  constructor(game) {
    super(game, "Serpent Generator", "Chronicles", "CHR");
  }
}

module.exports = SerpentGenerator;
