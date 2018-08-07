"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FieryFall extends UnimplementedCard {
  constructor (game) {
    super(game, "Fiery Fall", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = FieryFall;
