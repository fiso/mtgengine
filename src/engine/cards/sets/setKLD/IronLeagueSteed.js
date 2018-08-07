"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IronLeagueSteed extends UnimplementedCard {
  constructor (game) {
    super(game, "Iron League Steed", "Kaladesh", "KLD");
  }
}

module.exports = IronLeagueSteed;
