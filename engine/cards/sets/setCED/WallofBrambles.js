"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofBrambles extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Brambles", "Collector's Edition", "CED");
  }
}

module.exports = WallofBrambles;
