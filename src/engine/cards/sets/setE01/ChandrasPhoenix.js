"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChandrasPhoenix extends UnimplementedCard {
  constructor (game) {
    super(game, "Chandra's Phoenix", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = ChandrasPhoenix;
