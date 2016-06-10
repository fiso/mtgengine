"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OblivionRing extends UnimplementedCard {
  constructor (game) {
    super(game, "Oblivion Ring", "Archenemy", "ARC");
  }
}

module.exports = OblivionRing;
