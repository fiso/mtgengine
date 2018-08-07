"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanctumSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Sanctum Spirit", "Dominaria", "DOM");
  }
}

module.exports = SanctumSpirit;
