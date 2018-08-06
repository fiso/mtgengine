"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpriteNoble extends UnimplementedCard {
  constructor (game) {
    super(game, "Sprite Noble", "Eternal Masters", "EMA");
  }
}

module.exports = SpriteNoble;
