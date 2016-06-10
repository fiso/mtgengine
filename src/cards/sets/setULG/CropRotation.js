"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CropRotation extends UnimplementedCard {
  constructor (game) {
    super(game, "Crop Rotation", "Urza's Legacy", "ULG");
  }
}

module.exports = CropRotation;
