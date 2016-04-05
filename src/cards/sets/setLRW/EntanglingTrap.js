"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EntanglingTrap extends UnimplementedCard {
  constructor(game) {
    super(game, "Entangling Trap", "Lorwyn", "LRW");
  }
}

module.exports = EntanglingTrap;
