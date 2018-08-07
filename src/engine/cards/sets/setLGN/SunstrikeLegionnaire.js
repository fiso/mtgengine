"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunstrikeLegionnaire extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunstrike Legionnaire", "Legions", "LGN");
  }
}

module.exports = SunstrikeLegionnaire;
