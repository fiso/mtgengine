"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrokeofGenius extends UnimplementedCard {
  constructor(game) {
    super(game, "Stroke of Genius", "Commander 2014", "C14");
  }
}

module.exports = StrokeofGenius;
