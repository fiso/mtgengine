"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MalevolentAwakening extends UnimplementedCard {
  constructor(game) {
    super(game, "Malevolent Awakening", "Odyssey", "ODY");
  }
}

module.exports = MalevolentAwakening;
