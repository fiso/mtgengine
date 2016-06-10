"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoonSprite extends UnimplementedCard {
  constructor (game) {
    super(game, "Moon Sprite", "Portal", "POR");
  }
}

module.exports = MoonSprite;
