"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SliverLegion extends UnimplementedCard {
  constructor (game) {
    super(game, "Sliver Legion", "Future Sight", "FUT");
  }
}

module.exports = SliverLegion;
