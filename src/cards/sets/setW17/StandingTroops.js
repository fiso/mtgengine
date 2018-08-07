"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StandingTroops extends UnimplementedCard {
  constructor (game) {
    super(game, "Standing Troops", "Welcome Deck 2017", "W17");
  }
}

module.exports = StandingTroops;
