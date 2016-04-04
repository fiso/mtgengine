"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UlrichsKindred extends Card {
  constructor(game) {
    super(game, "Ulrich's Kindred", "Shadows over Innistrad", "SOI");
  }
}

module.exports = UlrichsKindred;
