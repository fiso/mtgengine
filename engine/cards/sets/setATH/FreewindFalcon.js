"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FreewindFalcon extends Card {
  constructor(game) {
    super(game, "Freewind Falcon", "Anthologies", "ATH");
  }
}

module.exports = FreewindFalcon;
