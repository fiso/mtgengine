"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EssenceSliver extends Card {
  constructor(game) {
    super(game, "Essence Sliver", "Legions", "LGN");
  }
}

module.exports = EssenceSliver;
