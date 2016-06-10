"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoulTongueInvocation extends UnimplementedCard {
  constructor (game) {
    super(game, "Foul-Tongue Invocation", "Dragons of Tarkir", "DTK");
  }
}

module.exports = FoulTongueInvocation;
