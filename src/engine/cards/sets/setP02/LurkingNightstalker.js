"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LurkingNightstalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Lurking Nightstalker", "Portal Second Age", "P02");
  }
}

module.exports = LurkingNightstalker;
