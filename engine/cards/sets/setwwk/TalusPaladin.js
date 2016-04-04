"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TalusPaladin extends Card {
  constructor(game) {
    super(game, "Talus Paladin", "Worldwake", "WWK");
  }
}

module.exports = TalusPaladin;
