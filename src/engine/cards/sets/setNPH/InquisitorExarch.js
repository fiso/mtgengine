"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InquisitorExarch extends UnimplementedCard {
  constructor (game) {
    super(game, "Inquisitor Exarch", "New Phyrexia", "NPH");
  }
}

module.exports = InquisitorExarch;
