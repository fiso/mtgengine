"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BubbleMatrix extends Card {
  constructor(game) {
    super(game, "Bubble Matrix", "Weatherlight", "WTH");
  }
}

module.exports = BubbleMatrix;
