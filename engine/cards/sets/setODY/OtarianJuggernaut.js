"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OtarianJuggernaut extends Card {
  constructor(game) {
    super(game, "Otarian Juggernaut", "Odyssey", "ODY");
  }
}

module.exports = OtarianJuggernaut;
