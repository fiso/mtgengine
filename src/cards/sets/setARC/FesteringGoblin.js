"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FesteringGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Festering Goblin", "Archenemy", "ARC");
  }
}

module.exports = FesteringGoblin;
