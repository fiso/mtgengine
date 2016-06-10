"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AstralSteel extends UnimplementedCard {
  constructor (game) {
    super(game, "Astral Steel", "Scourge", "SCG");
  }
}

module.exports = AstralSteel;
