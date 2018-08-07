"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChitteringDoom extends UnimplementedCard {
  constructor (game) {
    super(game, "Chittering Doom", "Unstable", "UST");
  }
}

module.exports = ChitteringDoom;
