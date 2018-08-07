"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InspiringStatuary extends UnimplementedCard {
  constructor (game) {
    super(game, "Inspiring Statuary", "Aether Revolt", "AER");
  }
}

module.exports = InspiringStatuary;
