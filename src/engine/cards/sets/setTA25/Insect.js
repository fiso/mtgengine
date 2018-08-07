"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Insect extends UnimplementedCard {
  constructor (game) {
    super(game, "Insect", "Masters 25 Tokens", "TA25");
  }
}

module.exports = Insect;
