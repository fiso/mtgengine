"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeaSpriteBase = require("../set5ED/SeaSprite.js");

class SeaSprite extends SeaSpriteBase {
  constructor(game) {
    super(game, "Sea Sprite", "Homelands", "HML");
  }
}

module.exports = SeaSprite;
