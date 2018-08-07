"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Unearth extends UnimplementedCard {
  constructor (game) {
    super(game, "Unearth", "Masters 25", "A25");
  }
}

module.exports = Unearth;
