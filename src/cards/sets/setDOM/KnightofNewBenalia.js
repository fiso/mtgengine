"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightofNewBenalia extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight of New Benalia", "Dominaria", "DOM");
  }
}

module.exports = KnightofNewBenalia;
