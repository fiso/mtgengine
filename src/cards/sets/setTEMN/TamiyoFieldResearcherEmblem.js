"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TamiyoFieldResearcherEmblem extends UnimplementedCard {
  constructor (game) {
    super(game, "Tamiyo, Field Researcher Emblem", "Eldritch Moon Tokens", "TEMN");
  }
}

module.exports = TamiyoFieldResearcherEmblem;
