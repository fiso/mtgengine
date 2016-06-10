"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoublePlay extends UnimplementedCard {
  constructor (game) {
    super(game, "Double Play", "Unglued", "UGL");
  }
}

module.exports = DoublePlay;
