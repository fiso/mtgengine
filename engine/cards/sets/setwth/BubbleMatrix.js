"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BubbleMatrix extends UnimplementedCard {
  constructor(game) {
    super(game, "Bubble Matrix", "Weatherlight", "WTH");
  }
}

module.exports = BubbleMatrix;
