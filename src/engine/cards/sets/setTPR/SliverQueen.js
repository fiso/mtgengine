"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SliverQueen extends UnimplementedCard {
  constructor (game) {
    super(game, "Sliver Queen", "Tempest Remastered", "TPR");
  }
}

module.exports = SliverQueen;
