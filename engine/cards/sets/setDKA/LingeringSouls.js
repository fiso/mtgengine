"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LingeringSouls extends Card {
  constructor(game) {
    super(game, "Lingering Souls", "Dark Ascension", "DKA");
  }
}

module.exports = LingeringSouls;
