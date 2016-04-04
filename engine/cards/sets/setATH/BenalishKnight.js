"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenalishKnight extends UnimplementedCard {
  constructor(game) {
    super(game, "Benalish Knight", "Anthologies", "ATH");
  }
}

module.exports = BenalishKnight;
