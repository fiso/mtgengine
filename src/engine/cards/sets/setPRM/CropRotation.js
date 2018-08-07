"use strict";
const Constants = require ("../../../Constants");
const CropRotationBase = require("../setDDR/CropRotation");

class CropRotation extends CropRotationBase {
  constructor (game) {
    super(game, "Crop Rotation", "Magic Online Promos", "PRM");
  }
}

module.exports = CropRotation;
