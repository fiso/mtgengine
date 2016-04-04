"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightofNewAlara extends UnimplementedCard {
  constructor(game) {
    super(game, "Knight of New Alara", "Alara Reborn", "ARB");
  }
}

module.exports = KnightofNewAlara;
