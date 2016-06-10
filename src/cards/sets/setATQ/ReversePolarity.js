"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReversePolarity extends UnimplementedCard {
  constructor (game) {
    super(game, "Reverse Polarity", "Antiquities", "ATQ");
  }
}

module.exports = ReversePolarity;
