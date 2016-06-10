"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UlrichsKindred extends UnimplementedCard {
  constructor (game) {
    super(game, "Ulrich's Kindred", "Shadows over Innistrad", "SOI");
  }
}

module.exports = UlrichsKindred;
