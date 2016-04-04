"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DaruSanctifier extends Card {
  constructor(game) {
    super(game, "Daru Sanctifier", "Legions", "LGN");
  }
}

module.exports = DaruSanctifier;
