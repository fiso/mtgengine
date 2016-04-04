"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThievingSpriteBase = require("../setLRW/ThievingSprite.js");

class ThievingSprite extends ThievingSpriteBase {
  constructor(game) {
    super(game, "Thieving Sprite", "Modern Masters", "MMA");
  }
}

module.exports = ThievingSprite;
