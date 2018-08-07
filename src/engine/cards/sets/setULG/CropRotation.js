"use strict";
const Constants = require ("../../../Constants");
const CropRotationBase = require("../setDDR/CropRotation");

class CropRotation extends CropRotationBase {
  constructor (game) {
    super(game, "Crop Rotation", "Urza's Legacy", "ULG");
  }
}

module.exports = CropRotation;
