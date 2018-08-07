"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MemorialtoGenius extends UnimplementedCard {
  constructor (game) {
    super(game, "Memorial to Genius", "Dominaria", "DOM");
  }
}

module.exports = MemorialtoGenius;
