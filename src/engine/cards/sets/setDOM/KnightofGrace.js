"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightofGrace extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight of Grace", "Dominaria", "DOM");
  }
}

module.exports = KnightofGrace;
