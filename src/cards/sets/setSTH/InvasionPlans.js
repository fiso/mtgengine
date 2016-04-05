"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InvasionPlans extends UnimplementedCard {
  constructor(game) {
    super(game, "Invasion Plans", "Stronghold", "STH");
  }
}

module.exports = InvasionPlans;
