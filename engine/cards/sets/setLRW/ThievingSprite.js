"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThievingSprite extends Card {
  constructor(game) {
    super(game, "Thieving Sprite", "Lorwyn", "LRW");
  }
}

module.exports = ThievingSprite;
