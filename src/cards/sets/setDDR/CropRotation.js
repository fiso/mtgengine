"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CropRotation extends UnimplementedCard {
  constructor (game) {
    super(game, "Crop Rotation", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = CropRotation;
