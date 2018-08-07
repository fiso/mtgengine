"use strict";
const Constants = require ("../../../Constants");
const CloudSpriteBase = require("../setDPA/CloudSprite");

class CloudSprite extends CloudSpriteBase {
  constructor (game) {
    super(game, "Cloud Sprite", "Mercadian Masques", "MMQ");
  }
}

module.exports = CloudSprite;
