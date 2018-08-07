"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrokeofGenius extends UnimplementedCard {
  constructor (game) {
    super(game, "Stroke of Genius", "Commander 2015", "C15");
  }
}

module.exports = StrokeofGenius;
