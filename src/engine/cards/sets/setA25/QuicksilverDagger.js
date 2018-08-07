"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuicksilverDagger extends UnimplementedCard {
  constructor (game) {
    super(game, "Quicksilver Dagger", "Masters 25", "A25");
  }
}

module.exports = QuicksilverDagger;
