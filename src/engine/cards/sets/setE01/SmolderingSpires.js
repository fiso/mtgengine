"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SmolderingSpires extends UnimplementedCard {
  constructor (game) {
    super(game, "Smoldering Spires", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = SmolderingSpires;
