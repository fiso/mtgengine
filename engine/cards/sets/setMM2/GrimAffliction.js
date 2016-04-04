"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimAffliction extends UnimplementedCard {
  constructor(game) {
    super(game, "Grim Affliction", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = GrimAffliction;
