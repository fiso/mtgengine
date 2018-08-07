"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrenziedGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Frenzied Goblin", "Masters 25", "A25");
  }
}

module.exports = FrenziedGoblin;
