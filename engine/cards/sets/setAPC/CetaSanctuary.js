"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CetaSanctuary extends Card {
  constructor(game) {
    super(game, "Ceta Sanctuary", "Apocalypse", "APC");
  }
}

module.exports = CetaSanctuary;
