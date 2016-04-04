"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarkSupplicant extends Card {
  constructor(game) {
    super(game, "Dark Supplicant", "Legions", "LGN");
  }
}

module.exports = DarkSupplicant;
