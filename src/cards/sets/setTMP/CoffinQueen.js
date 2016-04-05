"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoffinQueen extends UnimplementedCard {
  constructor(game) {
    super(game, "Coffin Queen", "Tempest", "TMP");
  }
}

module.exports = CoffinQueen;
