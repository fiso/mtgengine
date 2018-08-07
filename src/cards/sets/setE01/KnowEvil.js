"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnowEvil extends UnimplementedCard {
  constructor (game) {
    super(game, "Know Evil", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = KnowEvil;
