"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BanishingLight extends Card {
  constructor(game) {
    super(game, "Banishing Light", "Commander 2015", "C15");
  }
}

module.exports = BanishingLight;
