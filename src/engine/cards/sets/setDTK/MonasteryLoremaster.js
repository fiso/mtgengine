"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MonasteryLoremaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Monastery Loremaster", "Dragons of Tarkir", "DTK");
  }
}

module.exports = MonasteryLoremaster;
