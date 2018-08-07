"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyForcesAreInnumerable extends UnimplementedCard {
  constructor (game) {
    super(game, "My Forces Are Innumerable", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = MyForcesAreInnumerable;
