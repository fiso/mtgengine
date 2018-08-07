"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FallenFerromancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Fallen Ferromancer", "New Phyrexia", "NPH");
  }
}

module.exports = FallenFerromancer;
