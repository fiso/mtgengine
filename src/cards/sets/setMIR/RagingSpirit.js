"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RagingSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Raging Spirit", "Mirage", "MIR");
  }
}

module.exports = RagingSpirit;
