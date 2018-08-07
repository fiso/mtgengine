"use strict";
const Constants = require ("../../../Constants");
const SeaSpriteBase = require("../setMED/SeaSprite");

class SeaSprite extends SeaSpriteBase {
  constructor (game) {
    super(game, "Sea Sprite", "Homelands", "HML");
  }
}

module.exports = SeaSprite;
