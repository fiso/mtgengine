"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SealofDoom extends UnimplementedCard {
  constructor(game) {
    super(game, "Seal of Doom", "Commander 2015", "C15");
  }
}

module.exports = SealofDoom;
