"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulManipulation extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Manipulation", "Modern Masters 2017", "MM3");
  }
}

module.exports = SoulManipulation;
