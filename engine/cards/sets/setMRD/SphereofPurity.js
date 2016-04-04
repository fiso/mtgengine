"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SphereofPurity extends Card {
  constructor(game) {
    super(game, "Sphere of Purity", "Mirrodin", "MRD");
  }
}

module.exports = SphereofPurity;
