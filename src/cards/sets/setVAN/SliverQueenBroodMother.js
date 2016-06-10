"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SliverQueenBroodMother extends UnimplementedCard {
  constructor (game) {
    super(game, "Sliver Queen, Brood Mother", "Vanguard", "VAN");
  }
}

module.exports = SliverQueenBroodMother;
