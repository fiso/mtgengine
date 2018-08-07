"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoaningSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Moaning Spirit", "Portal Second Age", "P02");
  }
}

module.exports = MoaningSpirit;
