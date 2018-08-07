"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FesteringGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Festering Goblin", "Modern Masters", "MMA");
  }
}

module.exports = FesteringGoblin;
