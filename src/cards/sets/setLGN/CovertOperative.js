"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CovertOperative extends UnimplementedCard {
  constructor(game) {
    super(game, "Covert Operative", "Legions", "LGN");
  }
}

module.exports = CovertOperative;
