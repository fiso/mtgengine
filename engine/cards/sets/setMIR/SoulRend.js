"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulRend extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul Rend", "Mirage", "MIR");
  }
}

module.exports = SoulRend;
