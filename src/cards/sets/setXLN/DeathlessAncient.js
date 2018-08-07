"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathlessAncient extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathless Ancient", "Ixalan", "XLN");
  }
}

module.exports = DeathlessAncient;
