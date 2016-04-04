"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MonasteryLoremaster extends Card {
  constructor(game) {
    super(game, "Monastery Loremaster", "Dragons of Tarkir", "DTK");
  }
}

module.exports = MonasteryLoremaster;
