"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoaningSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Moaning Spirit", "Portal Second Age", "PO2");
  }
}

module.exports = MoaningSpirit;
