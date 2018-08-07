"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoonSprite extends UnimplementedCard {
  constructor (game) {
    super(game, "Moon Sprite", "Starter 2000", "S00");
  }
}

module.exports = MoonSprite;
