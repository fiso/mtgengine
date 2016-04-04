"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FontofVigor extends Card {
  constructor(game) {
    super(game, "Font of Vigor", "Journey into Nyx", "JOU");
  }
}

module.exports = FontofVigor;
