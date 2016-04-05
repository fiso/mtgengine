"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UginsInsight extends UnimplementedCard {
  constructor(game) {
    super(game, "Ugin's Insight", "Battle for Zendikar", "BFZ");
  }
}

module.exports = UginsInsight;
