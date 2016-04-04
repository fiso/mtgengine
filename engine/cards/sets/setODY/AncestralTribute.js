"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncestralTribute extends Card {
  constructor(game) {
    super(game, "Ancestral Tribute", "Odyssey", "ODY");
  }
}

module.exports = AncestralTribute;
