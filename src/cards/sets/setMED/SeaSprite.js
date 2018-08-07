"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeaSprite extends UnimplementedCard {
  constructor (game) {
    super(game, "Sea Sprite", "Masters Edition", "MED");
  }
}

module.exports = SeaSprite;
