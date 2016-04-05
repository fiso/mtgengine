"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyknightLegionnaire extends UnimplementedCard {
  constructor(game) {
    super(game, "Skyknight Legionnaire", "Arena League", "pARL");
  }
}

module.exports = SkyknightLegionnaire;
