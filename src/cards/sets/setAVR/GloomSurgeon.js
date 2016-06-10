"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GloomSurgeon extends UnimplementedCard {
  constructor (game) {
    super(game, "Gloom Surgeon", "Avacyn Restored", "AVR");
  }
}

module.exports = GloomSurgeon;
