"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernoElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Inferno Elemental", "Magic 2010", "M10");
  }
}

module.exports = InfernoElemental;
