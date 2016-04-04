"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZephyrSprite extends Card {
  constructor(game) {
    super(game, "Zephyr Sprite", "Magic 2010", "M10");
  }
}

module.exports = ZephyrSprite;
