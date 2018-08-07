"use strict";
const Constants = require ("../../../Constants");
const SeaSpriteBase = require("../setMED/SeaSprite");

class SeaSprite extends SeaSpriteBase {
  constructor (game) {
    super(game, "Sea Sprite", "Fifth Edition", "5ED");
  }
}

module.exports = SeaSprite;
