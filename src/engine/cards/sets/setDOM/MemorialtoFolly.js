"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MemorialtoFolly extends UnimplementedCard {
  constructor (game) {
    super(game, "Memorial to Folly", "Dominaria", "DOM");
  }
}

module.exports = MemorialtoFolly;
