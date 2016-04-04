"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RibbonSnake extends Card {
  constructor(game) {
    super(game, "Ribbon Snake", "Prophecy", "PCY");
  }
}

module.exports = RibbonSnake;
