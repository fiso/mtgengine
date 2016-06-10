"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CullingDais extends UnimplementedCard {
  constructor (game) {
    super(game, "Culling Dais", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = CullingDais;
