"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CitadelCastellan extends Card {
  constructor(game) {
    super(game, "Citadel Castellan", "Magic Origins", "ORI");
  }
}

module.exports = CitadelCastellan;
