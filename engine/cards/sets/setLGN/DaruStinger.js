"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaruStinger extends UnimplementedCard {
  constructor(game) {
    super(game, "Daru Stinger", "Legions", "LGN");
  }
}

module.exports = DaruStinger;
