"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Takara extends UnimplementedCard {
  constructor (game) {
    super(game, "Takara", "Vanguard Series", "PVAN");
  }
}

module.exports = Takara;
