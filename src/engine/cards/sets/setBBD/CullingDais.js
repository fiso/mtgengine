"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CullingDais extends UnimplementedCard {
  constructor (game) {
    super(game, "Culling Dais", "Battlebond", "BBD");
  }
}

module.exports = CullingDais;
