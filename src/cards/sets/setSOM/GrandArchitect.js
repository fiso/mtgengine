"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrandArchitect extends UnimplementedCard {
  constructor (game) {
    super(game, "Grand Architect", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GrandArchitect;
