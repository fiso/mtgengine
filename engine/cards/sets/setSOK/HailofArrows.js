"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HailofArrows extends Card {
  constructor(game) {
    super(game, "Hail of Arrows", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = HailofArrows;
