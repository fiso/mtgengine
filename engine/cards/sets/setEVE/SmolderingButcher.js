"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SmolderingButcher extends Card {
  constructor(game) {
    super(game, "Smoldering Butcher", "Eventide", "EVE");
  }
}

module.exports = SmolderingButcher;
