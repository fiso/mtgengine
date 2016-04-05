"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProfaneroftheDead extends UnimplementedCard {
  constructor(game) {
    super(game, "Profaner of the Dead", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ProfaneroftheDead;
