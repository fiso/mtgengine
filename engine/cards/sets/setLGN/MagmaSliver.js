"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagmaSliver extends Card {
  constructor(game) {
    super(game, "Magma Sliver", "Legions", "LGN");
  }
}

module.exports = MagmaSliver;
