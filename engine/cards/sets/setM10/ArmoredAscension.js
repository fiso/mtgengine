"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArmoredAscension extends Card {
  constructor(game) {
    super(game, "Armored Ascension", "Magic 2010", "M10");
  }
}

module.exports = ArmoredAscension;
