"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightofMalice extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight of Malice", "Dominaria", "DOM");
  }
}

module.exports = KnightofMalice;
