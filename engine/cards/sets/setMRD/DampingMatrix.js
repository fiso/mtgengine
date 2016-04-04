"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DampingMatrix extends Card {
  constructor(game) {
    super(game, "Damping Matrix", "Mirrodin", "MRD");
  }
}

module.exports = DampingMatrix;
