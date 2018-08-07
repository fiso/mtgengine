"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeclarationinStone extends UnimplementedCard {
  constructor (game) {
    super(game, "Declaration in Stone", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DeclarationinStone;
