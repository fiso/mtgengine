"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StinkdrinkerBandit extends UnimplementedCard {
  constructor(game) {
    super(game, "Stinkdrinker Bandit", "Morningtide", "MOR");
  }
}

module.exports = StinkdrinkerBandit;
