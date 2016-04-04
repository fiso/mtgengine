"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StillmoonCavalier extends Card {
  constructor(game) {
    super(game, "Stillmoon Cavalier", "Eventide", "EVE");
  }
}

module.exports = StillmoonCavalier;
