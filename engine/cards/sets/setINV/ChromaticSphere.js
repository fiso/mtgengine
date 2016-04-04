"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChromaticSphere extends Card {
  constructor(game) {
    super(game, "Chromatic Sphere", "Invasion", "INV");
  }
}

module.exports = ChromaticSphere;
