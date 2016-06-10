"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Sacred Knight", "Portal", "POR");
  }
}

module.exports = SacredKnight;
