"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FacetoFace extends Card {
  constructor(game) {
    super(game, "Face to Face", "Unhinged", "UNH");
  }
}

module.exports = FacetoFace;
