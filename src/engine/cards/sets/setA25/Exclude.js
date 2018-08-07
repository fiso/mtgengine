"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Exclude extends UnimplementedCard {
  constructor (game) {
    super(game, "Exclude", "Masters 25", "A25");
  }
}

module.exports = Exclude;
