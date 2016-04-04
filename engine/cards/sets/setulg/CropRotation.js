"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CropRotation extends Card {
  constructor(game) {
    super(game, "Crop Rotation", "Urza's Legacy", "ULG");
  }
}

module.exports = CropRotation;
