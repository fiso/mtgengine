"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinGaveleer extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Gaveleer", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GoblinGaveleer;
