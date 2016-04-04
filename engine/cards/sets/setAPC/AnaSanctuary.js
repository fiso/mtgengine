"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AnaSanctuary extends Card {
  constructor(game) {
    super(game, "Ana Sanctuary", "Apocalypse", "APC");
  }
}

module.exports = AnaSanctuary;
