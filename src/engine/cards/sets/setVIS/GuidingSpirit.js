"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuidingSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Guiding Spirit", "Visions", "VIS");
  }
}

module.exports = GuidingSpirit;
