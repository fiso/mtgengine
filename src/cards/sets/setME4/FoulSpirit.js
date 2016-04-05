"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoulSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Foul Spirit", "Masters Edition IV", "ME4");
  }
}

module.exports = FoulSpirit;
