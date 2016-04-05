"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LurkingNightstalker extends UnimplementedCard {
  constructor(game) {
    super(game, "Lurking Nightstalker", "Portal Second Age", "PO2");
  }
}

module.exports = LurkingNightstalker;
