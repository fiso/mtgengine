"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfusedArrows extends Card {
  constructor(game) {
    super(game, "Infused Arrows", "Fifth Dawn", "5DN");
  }
}

module.exports = InfusedArrows;
