"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarbleDiamond extends UnimplementedCard {
  constructor (game) {
    super(game, "Marble Diamond", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MarbleDiamond;
