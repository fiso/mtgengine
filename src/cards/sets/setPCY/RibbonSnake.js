"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RibbonSnake extends UnimplementedCard {
  constructor (game) {
    super(game, "Ribbon Snake", "Prophecy", "PCY");
  }
}

module.exports = RibbonSnake;
