"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZephyrSprite extends UnimplementedCard {
  constructor(game) {
    super(game, "Zephyr Sprite", "Magic 2010", "M10");
  }
}

module.exports = ZephyrSprite;
