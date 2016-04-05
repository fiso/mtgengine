"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SliverQueenAvatar extends UnimplementedCard {
  constructor(game) {
    super(game, "Sliver Queen Avatar", "Vanguard", "VAN");
  }
}

module.exports = SliverQueenAvatar;
