"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrackwaterElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Brackwater Elemental", "Conflux", "CON");
  }
}

module.exports = BrackwaterElemental;
