"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Monk extends UnimplementedCard {
  constructor (game) {
    super(game, "Monk", "Fate Reforged Tokens", "TFRF");
  }
}

module.exports = Monk;
