"use strict";
const Constants = require ("../../../Constants");
const SeaSpriteBase = require("../set5ED/SeaSprite");

class SeaSprite extends SeaSpriteBase {
  constructor(game) {
    super(game, "Sea Sprite", "Masters Edition", "MED");
  }
}

module.exports = SeaSprite;
