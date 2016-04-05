"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InspiredSprite extends UnimplementedCard {
  constructor(game) {
    super(game, "Inspired Sprite", "Morningtide", "MOR");
  }
}

module.exports = InspiredSprite;
