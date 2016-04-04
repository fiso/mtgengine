"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkyknightLegionnaire extends Card {
  constructor(game) {
    super(game, "Skyknight Legionnaire", "Arena League", "pARL");
  }
}

module.exports = SkyknightLegionnaire;
