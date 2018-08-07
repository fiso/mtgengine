"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThievingSprite extends UnimplementedCard {
  constructor (game) {
    super(game, "Thieving Sprite", "Modern Masters", "MMA");
  }
}

module.exports = ThievingSprite;
