"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefiantStrike extends UnimplementedCard {
  constructor(game) {
    super(game, "Defiant Strike", "Khans of Tarkir", "KTK");
  }
}

module.exports = DefiantStrike;
