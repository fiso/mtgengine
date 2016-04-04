"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FaceofFear extends Card {
  constructor(game) {
    super(game, "Face of Fear", "Odyssey", "ODY");
  }
}

module.exports = FaceofFear;
