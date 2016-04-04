"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SunstrikeLegionnaire extends Card {
  constructor(game) {
    super(game, "Sunstrike Legionnaire", "Legions", "LGN");
  }
}

module.exports = SunstrikeLegionnaire;
