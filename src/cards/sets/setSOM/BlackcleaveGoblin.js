"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlackcleaveGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Blackcleave Goblin", "Scars of Mirrodin", "SOM");
  }
}

module.exports = BlackcleaveGoblin;
