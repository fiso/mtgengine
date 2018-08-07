"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ParadoxEngine extends UnimplementedCard {
  constructor (game) {
    super(game, "Paradox Engine", "Aether Revolt", "AER");
  }
}

module.exports = ParadoxEngine;
