"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NosyGoblin extends UnimplementedCard {
  constructor(game) {
    super(game, "Nosy Goblin", "Onslaught", "ONS");
  }
}

module.exports = NosyGoblin;
