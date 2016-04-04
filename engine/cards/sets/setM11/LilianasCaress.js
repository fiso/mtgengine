"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LilianasCaress extends Card {
  constructor(game) {
    super(game, "Liliana's Caress", "Magic 2011", "M11");
  }
}

module.exports = LilianasCaress;
