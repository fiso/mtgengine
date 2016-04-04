"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoggartSpriteChaser extends Card {
  constructor(game) {
    super(game, "Boggart Sprite-Chaser", "Lorwyn", "LRW");
  }
}

module.exports = BoggartSpriteChaser;
