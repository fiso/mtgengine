"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChromaticSphere extends UnimplementedCard {
  constructor(game) {
    super(game, "Chromatic Sphere", "Invasion", "INV");
  }
}

module.exports = ChromaticSphere;
