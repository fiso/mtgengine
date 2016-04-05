"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DartingMerfolk extends UnimplementedCard {
  constructor(game) {
    super(game, "Darting Merfolk", "Mercadian Masques", "MMQ");
  }
}

module.exports = DartingMerfolk;
