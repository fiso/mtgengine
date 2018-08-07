"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampire Knight", "Shadows over Innistrad Tokens", "TSOI");
  }
}

module.exports = VampireKnight;
