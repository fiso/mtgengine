"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TamiyoFieldResearcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Tamiyo, Field Researcher", "Eldritch Moon", "EMN");
  }
}

module.exports = TamiyoFieldResearcher;
