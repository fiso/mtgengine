"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurningSands extends Card {
  constructor(game) {
    super(game, "Burning Sands", "Odyssey", "ODY");
  }
}

module.exports = BurningSands;
