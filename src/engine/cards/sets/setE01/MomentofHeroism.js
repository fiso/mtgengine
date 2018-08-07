"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MomentofHeroism extends UnimplementedCard {
  constructor (game) {
    super(game, "Moment of Heroism", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = MomentofHeroism;
