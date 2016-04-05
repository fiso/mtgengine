"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StandingTroops extends UnimplementedCard {
  constructor(game) {
    super(game, "Standing Troops", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StandingTroops;
