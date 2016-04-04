"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CloudSpriteBase = require("../setDPA/CloudSprite.js");

class CloudSprite extends CloudSpriteBase {
  constructor(game) {
    super(game, "Cloud Sprite", "Tenth Edition", "10E");
  }
}

module.exports = CloudSprite;
